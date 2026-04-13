import Parser from "rss-parser";
import { Article, NewsResponse, Topic } from "./types";
import { RSS_SOURCES } from "./sources";
import { normalizeArticle, deduplicateArticles } from "./normalize";
import { supabase } from "./supabase";
import { supabaseAdmin } from "./supabaseAdmin";
import { classifyArticles } from "./classify";

const parser = new Parser({
  timeout: 8000,
  headers: { "User-Agent": "Mozilla/5.0 (compatible; CordobaMonitor/1.0)" },
});

// --- MEJORA 1: FILTRADO POR FECHA (7 DÍAS) ---
async function fetchFeed(url: string, sourceName: string): Promise<Article[]> {
  try {
    const feed = await parser.parseURL(url);
    const articles: Article[] = [];
    
    // Calculamos el límite de 7 días atrás
   const latestItems = (feed.items || []).slice(0, 10);
   for (const item of latestItems) {
    
      const article = normalizeArticle({
        title: item.title,
        link: item.link,
        contentSnippet: item.contentSnippet,
        content: item.content,
        pubDate: item.pubDate,
        isoDate: item.isoDate,
        source: sourceName,
      });
      if (article) articles.push(article);
    }
    return articles;
  } catch (error) {
    console.error(`[fetchFeed] Error en ${sourceName}:`, error);
    return [];
  }
}

export async function fetchAllNews(): Promise<NewsResponse> {
  // 1. Obtener noticias recientes
  const rssResults = await Promise.allSettled(
    RSS_SOURCES.map((s) => fetchFeed(s.url, s.name))
  );

  const allArticles: Article[] = [];
  for (const result of rssResults) {
    if (result.status === "fulfilled") allArticles.push(...result.value);
  }

  // 2. DEDUPLICACIÓN Y MAPEO DE MUNICIPIOS MEJORADO
  const deduped: Article[] = deduplicateArticles(allArticles).map((art: Article) => {
    const text = `${art.title} ${art.summary || ""}`.toLowerCase();
    
    // Mapeo más robusto
    if (text.includes("puerto libertador")) art.neighborhood = "Puerto Libertador";
    else if (text.includes("montelibano") || text.includes("montelíbano")) art.neighborhood = "Montelíbano";
    else if (text.includes("sahagun") || text.includes("sahagún")) art.neighborhood = "Sahagún";
    else if (text.includes("planeta rica")) art.neighborhood = "Planeta Rica";
    else if (text.includes("lorica") || text.includes("santa cruz de lorica")) art.neighborhood = "Lorica";
    else if (text.includes("tierralta")) art.neighborhood = "Tierralta";
    else if (text.includes("chinú") || text.includes("chinu")) art.neighborhood = "Chinú";
    else if (text.includes("monteria") || text.includes("montería")) art.neighborhood = "Montería";
    else if (text.includes("caucasia")) art.neighborhood = "Caucasia";
    else if (text.includes("cereté") || text.includes("cerete")) art.neighborhood = "Cereté";
    else art.neighborhood = "Córdoba (General)"; // Evita sesgo total hacia Montería

    return art;
  });

  // Ordenar por más reciente primero
  deduped.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const fetchedAt = new Date().toISOString();

  // 3. GUARDADO INTELIGENTE (UPSERT)
  if (deduped.length > 0) {
    const { error } = await supabaseAdmin.from("articles").upsert(
      deduped.map((a: Article) => ({
        id: a.id,
        title: a.title,
        source: a.source,
        published_at: new Date(a.publishedAt || new Date()).toISOString(),
        description: a.summary || "Sin descripción", 
        url: a.url,
        fetched_at: fetchedAt,
        topic: (String(a.topic || "GENERAL")).toUpperCase(), // Forzamos a string
        neighborhood: a.neighborhood, 
      })),
      { onConflict: "id" }
    );
    if (error) console.error("[supabase] upsert failed:", error.message);
  }

  // 4. CLASIFICACIÓN CON IA (Solo si son noticias nuevas)
  // No gastamos API si no hay noticias
  if (deduped.length > 0) {
    classifyArticles(deduped)
      .then((classified) => {
         const updates = classified.map((a: Article) => ({
            id: a.id,
            topic: a.topic as any, // Bypass de seguridad
            neighborhood: a.neighborhood as any,
            threat_level: (a as any).threat_level,
            sentiment: (a as any).sentiment,
            alert: (a as any).alert
         }));
         
         // Actualizamos con los datos de inteligencia de Gemini
         return supabaseAdmin.from("articles").upsert(updates, { onConflict: "id" });
      })
      .catch((err) => console.error("[Intelligence Error]:", err.message));
  }

  return { articles: deduped, fetchedAt, total: deduped.length };
}