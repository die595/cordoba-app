import { GoogleGenerativeAI } from "@google/generative-ai";
import { supabase } from "./supabase";
import { DashboardStats } from "./types";

// 1. CONFIGURACIÓN DE IA (Cambio a modelo estable para evitar error 404)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 2. LISTA MAESTRA DE MUNICIPIOS DE CÓRDOBA
const MUNICIPIOS_CORDOBA = [
  "Montería", "Cereté", "Lorica", "Sahagún", "Montelíbano", 
  "Puerto Libertador", "Tierralta", "Planeta Rica", "Ciénaga de Oro", "Chinú"
];
export interface DayBucket {
  day: string;
  count: number;
}
export interface WordFreq {
  text: string;
  value: number;
}
export interface HourlyBucket {
  hour: string;
  count: number;
}

export interface NeighborhoodArticle {
  id: string;
  title: string;
  url: string;
  topic: string | null;
  neighborhood: string;
  published_at: string;
  fetched_at?: string;
  // --- AGREGA ESTOS CAMPOS PARA QUITAR LOS ERRORES ---
  threat_level?: string; 
  sentiment?: number | string | null;
  alert?: string;
}

/**
 * OBTIENE ESTADÍSTICAS GENERALES
 */
export async function getDashboardStats(): Promise<DashboardStats> {
  const fifteenDaysAgo = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString();

  const [totalRes, last24hRes, byTopicRes, bySourceRes] = await Promise.all([
    supabase.from("articles").select("*", { count: "exact", head: true }).in("neighborhood", MUNICIPIOS_CORDOBA),
    supabase.from("articles").select("*", { count: "exact", head: true }).gte("fetched_at", fifteenDaysAgo).in("neighborhood", MUNICIPIOS_CORDOBA),
    supabase.from("articles").select("topic").not("topic", "is", null).in("neighborhood", MUNICIPIOS_CORDOBA),
    supabase.from("articles").select("source").in("neighborhood", MUNICIPIOS_CORDOBA),
  ]);

  const topicCounts = new Map<string, number>();
  for (const row of byTopicRes.data ?? []) {
    const t = row.topic as string;
    topicCounts.set(t, (topicCounts.get(t) ?? 0) + 1);
  }
  const byTopic = [...topicCounts.entries()]
    .map(([topic, count]) => ({ topic, count }))
    .sort((a, b) => b.count - a.count);

  const sourceCounts = new Map<string, number>();
  for (const row of bySourceRes.data ?? []) {
    const s = row.source as string;
    sourceCounts.set(s, (sourceCounts.get(s) ?? 0) + 1);
  }
  const bySource = [...sourceCounts.entries()]
    .map(([source, count]) => ({ source, count }))
    .sort((a, b) => b.count - a.count);

  return {
    total: totalRes.count ?? 0,
    last24h: last24hRes.count ?? 0,
    byTopic: byTopic as any,
    byTopic24h: [], // Opcional: implementar lógica similar a byTopic
    bySource,
  };
}

/**
 * ARTÍCULOS PARA EL MAPA (15 DÍAS)
 */
export async function getMunicipalityArticles() {
  const fifteenDaysAgo = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString();

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .in("neighborhood", MUNICIPIOS_CORDOBA)
    .gte("fetched_at", fifteenDaysAgo)
    .order("published_at", { ascending: false });

  if (error) return null;
  return data;
}

/**
 * RESUMEN CON GEMINI
 */
export async function getDailySummary(): Promise<string> {
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  
  const { data } = await supabase
    .from("articles")
    .select("title, summary, neighborhood")
    .in("neighborhood", MUNICIPIOS_CORDOBA) 
    .gte("fetched_at", yesterday)
    .limit(30);

  if (!data || data.length === 0) return "No hay noticias recientes para resumir.";

  const headlines = data.map((r, i) => `${i + 1}. ${r.title}`).join("\n");
  const prompt = `Analiza estas noticias de Córdoba, Colombia y haz un resumen de 2 párrafos:\n${headlines}`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    return "Análisis no disponible.";
  }
}

/**
 * ACTIVIDAD SEMANAL (GRÁFICO)
 */
export async function getWeeklyActivity() {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const { data, error } = await supabase
    .from("articles")
    // 1. AGREGA LOS CAMPOS AQUÍ (Separados por coma)
    .select("created_at, fetched_at, published_at") 
    .in("neighborhood", MUNICIPIOS_CORDOBA)
    .gte("created_at", sevenDaysAgo.toISOString());

  const counts = new Map<string, number>();
  
  for (const row of data ?? []) {
    // 2. Ahora TypeScript ya reconocerá estos campos
    const dateValue = row.fetched_at || row.published_at || row.created_at; 
    
    if (dateValue) {
      const d = new Date(dateValue as string);
      const key = `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  
  // No olvides retornar los datos formateados para el gráfico
  return Array.from(counts.entries()).map(([date, count]) => ({ date, count }));
}

/**
 * FRECUENCIA DE PALABRAS
 */
export async function getWordFrequencies(): Promise<WordFreq[]> {
  const fifteenDaysAgo = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString();
  const { data } = await supabase
    .from("articles")
    .select("title, resumen")
    .in("neighborhood", MUNICIPIOS_CORDOBA)
    .gte("fetched_at", fifteenDaysAgo);

  if (!data) return [];
  
  const freq: Record<string, number> = {};
  data.forEach(a => {
    const text = (a.title + " " + (a.resumen || "")).toLowerCase();
    const words = text.split(/\s+/);
    words.forEach(w => {
      const word = w.replace(/[^a-zñáéíóú]/g, "");
      if (word.length > 4) freq[word] = (freq[word] ?? 0) + 1;
    });
  });

  return Object.entries(freq)
    .map(([text, value]) => ({ text, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 20);
}