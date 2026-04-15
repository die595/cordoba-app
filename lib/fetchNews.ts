// @ts-ignore
import { generateStrategicReport } from "./strategicAnalysis";
import * as dotenv from 'dotenv';
import path from 'path';
import Parser from "rss-parser";
import { Article, NewsResponse } from "./types";  
import { RSS_SOURCES } from "./sources";
import { normalizeArticle, deduplicateArticles } from "./normalize";
import { supabaseAdmin } from "./supabaseAdmin";
// Importación corregida para evitar el error de "not a function"
import { classifyArticles } from "./classify"; // Importación directa entre llaves

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const parser = new Parser({
  timeout: 8000,
  headers: { "User-Agent": "Mozilla/5.0 (compatible; CordobaMonitor/1.0)" },
});

async function fetchFeed(url: string, sourceName: string): Promise<Article[]> {
  try {
    const feed = await parser.parseURL(url);
    const articles: Article[] = [];
    const latestItems = (feed.items || []).slice(0, 15);
    
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
      if (article && article.title) articles.push(article);
    }
    return articles;
  } catch (error) {
    console.error(`[fetchFeed] Error en ${sourceName}:`, error);
    return [];
  }
}

export async function fetchAllNews(): Promise<NewsResponse> {
  console.log("🚀 [DATACORE] Iniciando recolección de noticias...");
  
  const rssResults = await Promise.allSettled(
    RSS_SOURCES.map((s) => fetchFeed(s.url, s.name))
  );

  const allArticles: Article[] = [];
  for (const result of rssResults) {
    if (result.status === "fulfilled") allArticles.push(...result.value);
  }

  let deduped = deduplicateArticles(allArticles).map((art: Article) => {
    const text = `${art.title} ${art.summary || ""}`.toLowerCase();
    if (text.includes("puerto libertador")) art.neighborhood = "Puerto Libertador";
    else if (text.includes("montelibano") || text.includes("montelíbano")) art.neighborhood = "Montelíbano";
    else if (text.includes("sahagun") || text.includes("sahagún")) art.neighborhood = "Sahagún";
    else if (text.includes("planeta rica")) art.neighborhood = "Planeta Rica";
    else if (text.includes("lorica")) art.neighborhood = "Lorica";
    else if (text.includes("tierralta")) art.neighborhood = "Tierralta";
    else if (text.includes("chinú") || text.includes("chinu")) art.neighborhood = "Chinú";
    else if (text.includes("monteria") || text.includes("montería")) art.neighborhood = "Montería";
    else if (text.includes("cereté") || text.includes("cerete")) art.neighborhood = "Cereté";
    else art.neighborhood = "Córdoba"; 
    return art;
  });

  deduped.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const fetchedAt = new Date().toISOString();

  let finalArticles = deduped;
  
  // --- CLASIFICACIÓN CON IA ---
  if (deduped.length > 0) {
    try {
      console.log(`🧠 Clasificando ${deduped.length} noticias con DeepSeek...`);
      const result = await classifyArticles(deduped);
      // Llamada usando el módulo para asegurar compatibilidad
      finalArticles = Array.isArray(result) ? result : deduped;
    } catch (err) {
      console.error("❌ Error en clasificación IA:", err);
      finalArticles = deduped; // Si falla, volvemos a los datos originales
    }
  }

  // --- GUARDADO DE NOTICIAS ---
  if (Array.isArray(finalArticles) && finalArticles.length > 0) {
    const toSave = finalArticles.filter(a => a.title && a.title.trim() !== "");
    const { error } = await supabaseAdmin.from("articles").upsert(
      toSave.map((a) => ({
        id: a.id,
        title: a.title,
        source: a.source,
        published_at: new Date(a.publishedAt).toISOString(),
        description: a.summary || "Sin descripción", 
        url: a.url,
        fetched_at: fetchedAt,
        topic: (a.topic || "GENERAL").toUpperCase(),
        neighborhood: a.neighborhood || "Córdoba",
        threat_level: a.threat_level || "Bajo",
        sentiment: a.sentiment || "Neutral",
        alert: a.alert || false
      })),
      { onConflict: "id" }
    );
    if (error) console.error("❌ Error Supabase Upsert:", error.message); 
  }

  // --- NUEVO: GENERAR Y GUARDAR ANÁLISIS ESTRATÉGICO (SitRep) ---
  if (finalArticles.length > 0) {
    try {
      console.log("📊 Generando análisis estratégico de situación...");
      const reportText = await generateStrategicReport(finalArticles);
      
      const { error: reportError } = await supabaseAdmin
        .from("analysis")
        .upsert({ 
          id: 1, 
          content: reportText, 
          created_at: new Date().toISOString() 
        });

      if (reportError) console.error("❌ Error guardando SitRep:", reportError.message);
      else console.log("✅ SitRep actualizado correctamente.");
    } catch (err) {
      console.error("❌ Fallo al generar reporte estratégico:", err);
    }
  }

  return { articles: finalArticles, fetchedAt, total: finalArticles.length };
}

// Ejecución manual
if (require.main === module) {
  (async () => {
    try {
      const result = await fetchAllNews();
      console.log(`🎉 PROCESO COMPLETADO: ${result.total} noticias.`);
    } catch (error) {
      console.error("❌ Error Crítico:", error);
    }
  })();
}