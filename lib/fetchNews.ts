// @ts-ignore
import { generateStrategicReport } from "./strategicAnalysis";
import * as dotenv from 'dotenv';
import path from 'path';
import Parser from "rss-parser";
import { v5 as uuidv5 } from 'uuid';
import { Article, NewsResponse } from "./types";  
import { RSS_SOURCES } from "./sources";
import { normalizeArticle, deduplicateArticles } from "./normalize";
import { supabaseAdmin } from "./supabaseAdmin";
import { classifyArticles } from "./classify";
import { scrapeFacebookOrganis } from "./facebookScraper"; 

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const NAMESPACE_UUID = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';

// --- CONTROL TEMPORAL (15 DÍAS) ---
function esNoticiaReciente(fechaIso?: string): boolean {
  if (!fechaIso) return true;
  const fechaNoticia = new Date(fechaIso).getTime();
  const quinceDiasAtras = Date.now() - (15 * 24 * 60 * 60 * 1000);
  return fechaNoticia >= quinceDiasAtras;
}

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
  console.log("🚀 [DATACORE] Recolección amplia con ventana temporal de 15 días...");
  
  // 1. Recolectar noticias RSS (Filtramos solo las que NO son de Facebook)
  const rssOnlySources = RSS_SOURCES.filter(s => !s.url.includes("facebook.com"));
  const rssResults = await Promise.allSettled(
    rssOnlySources.map((s) => fetchFeed(s.url, s.name))
  );

  let rawArticles: Article[] = [];
  for (const result of rssResults) {
    if (result.status === "fulfilled") rawArticles.push(...result.value);
  }

  // 2. Recolectar Facebook Dinámicamente (Organis, Piotico, etc.)
  try {
    const fbSources = RSS_SOURCES.filter(s => s.url.includes("facebook.com"));
    console.log(`🕵️ Detectadas ${fbSources.length} fuentes de Facebook...`);

    for (const source of fbSources) {
      console.log(`📡 Extrayendo datos de: ${source.name}...`);
      
      // Enviamos la URL específica de la fuente al scraper
      const fbPosts = await scrapeFacebookOrganis(source.url); 
      
      if (fbPosts && fbPosts.length > 0) {
        const fbArticles: Article[] = fbPosts.map((text, index) => {
          const cleanText = text || '';
          // Añadimos source.name al hash para evitar colisiones de ID entre páginas
          const generatedId = uuidv5(cleanText.substring(0, 100) + index + source.name, NAMESPACE_UUID);
          
          return {
            id: generatedId,
            title: cleanText.substring(0, 90).replace(/\n/g, " ") + "...",
            summary: cleanText,
            source: source.name,
            publishedAt: new Date().toISOString(),
            url: source.url,
            neighborhood: "Córdoba"
          };
        });
        rawArticles.push(...fbArticles);
        console.log(`✅ ${fbArticles.length} publicaciones de ${source.name} añadidas.`);
      }
    }
  } catch (fbErr) {
    console.error("❌ Error recolectando Facebook:", fbErr);
  }

  // 3. Filtrar solo por FECHA (15 días) y mapear barrios
  const processedArticles = rawArticles
    .filter(art => esNoticiaReciente(art.publishedAt))
    .map((art: Article) => {
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
      else if (text.includes("caucasia")) art.neighborhood = "Caucasia";
      else if (text.includes("ayapel")) art.neighborhood = "Ayapel";
      else if (text.includes("valencia")) art.neighborhood = "Valencia";
      else art.neighborhood = "Córdoba"; 
      return art;
    });

  const deduped = deduplicateArticles(processedArticles);
  deduped.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const fetchedAt = new Date().toISOString();

  let finalArticles = deduped;
  
  if (deduped.length > 0) {
    try {
      console.log(`🧠 Clasificando ${deduped.length} noticias recientes con IA...`);
      const result = await classifyArticles(deduped);
      finalArticles = Array.isArray(result) ? result : deduped;
    } catch (err) {
      console.error("❌ Error en clasificación IA:", err);
      finalArticles = deduped;
    }
  }

  if (Array.isArray(finalArticles) && finalArticles.length > 0) {
    await supabaseAdmin.from("articles").upsert(
      finalArticles.map((a: any) => ({
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
  }

  if (finalArticles.length > 0) {
    try {
      console.log("📊 Actualizando SitRep estratégico...");
      const reportText = await generateStrategicReport(finalArticles);
      await supabaseAdmin.from("analysis").upsert({ 
        id: 1, 
        content: reportText, 
        created_at: new Date().toISOString() 
      });
      console.log("✅ Proceso completado.");
    } catch (err) {
      console.error("❌ Fallo SitRep:", err);
    }
  }

  return { articles: finalArticles, fetchedAt, total: finalArticles.length };
}

if (require.main === module) {
  (async () => {
    try {
      const result = await fetchAllNews();
      console.log(`🎉 TOTAL PROCESADO: ${result.total} noticias (últimos 15 días).`);
    } catch (error) {
      console.error("❌ Error Crítico:", error);
    }
  })();
}