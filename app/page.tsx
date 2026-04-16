import { DayBucket, WordFreq, NeighborhoodArticle } from "@/lib/stats";
import { fetchAllNews } from "@/lib/fetchNews";
import { 
  getDashboardStats, 
  getWeeklyActivity, 
  getWordFrequencies, 
  getMunicipalityArticles, 
  getDailySummary
} from "@/lib/stats";
import { ArticleSection } from "@/components/ArticleSection";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { StrategicPanel } from "@/components/StrategicPanel";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

// CONFIGURACIÓN DE FRECUENCIA (6 HORAS)
export const revalidate = 21600; 

async function getLatestSitRep() {
  try {
    const { data, error } = await supabaseAdmin
      .from("analysis")
      .select("content")
      .eq("id", 1)
      .single();
    
    if (error || !data) return "SITREP: Esperando actualización de inteligencia...";
    return data.content;
  } catch (e) {
    return "Error al conectar con la base de datos de inteligencia.";
  }
}

export default async function Home() {
  /**
   * 1. RECOLECCIÓN TOTAL
   * fetchAllNews() ya contiene la lógica para recorrer RSS_SOURCES.
   * Al ejecutarlo aquí, el sistema entra a:
   * - Chicanoticias, El Meridiano, La Razón, Twitter X, etc.
   * - Facebook (Piotico y Organis).
   */
  const { articles, fetchedAt, total } = await fetchAllNews();

  // 2. PROCESAMIENTO DE DATOS Y SITREP
  // Ejecutamos las consultas estadísticas y traemos el reporte que la IA acaba de generar
  const [stats, weekly, words, municipalityData, dailySummary, realStrategicReport] = await Promise.all([
    getDashboardStats(),      
    getWeeklyActivity(),      
    getWordFrequencies(),     
    getMunicipalityArticles(),
    getDailySummary(),
    getLatestSitRep(), 
  ]);

  // 3. FILTRADO DE ALERTAS CRÍTICAS (Para el Dashboard)
  const highRisks = (municipalityData as any[] || []).filter((a: any) => a.threat_level === 'ALTO');

  const validSentiments = (municipalityData as any[] || []).filter((a: any) => a.sentiment !== null);
  const totalSentiment = validSentiments.reduce((acc: number, a: any) => acc + (Number(a.sentiment) || 0), 0);
  const avgSentiment = validSentiments.length > 0 
    ? (totalSentiment / validSentiments.length).toFixed(2) 
    : "0.00";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--bg-base)" }}>
      {/* El Header muestra el total sumado de TODAS las fuentes */}
      <Header total={total} fetchedAt={fetchedAt} />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-6 pt-6">
        
        {/* REPORTE ESTRATÉGICO GENERADO CON TODAS LAS FUENTES */}
        <StrategicPanel report={realStrategicReport} />

        <Dashboard 
          stats={stats as any} 
          weekly={weekly as any} 
          words={words as any} 
          neighborhoodArticles={municipalityData as any} 
          dailySummary={dailySummary as any}
          highRisks={highRisks as any}
          avgSentiment={avgSentiment}
        />

        {/* Lista completa de noticias de Chicanoticias, El Meridiano, Piotico, etc. */}
        <ArticleSection articles={articles} />
      </main>

      <footer className="text-center text-xs py-8"
        style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
        DATACORE Monitor de Seguridad · Ing. Javier Cardenas · {new Date().getFullYear()}
      </footer>
    </div>
  );
}