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
// 1. IMPORTA EL NUEVO COMPONENTE AQUÍ
import { StrategicPanel } from "@/components/StrategicPanel";

export const revalidate = 60; 

export default async function Home() {
  // 1. Obtenemos las noticias y las subimos a Supabase
  const { articles, fetchedAt, total } = await fetchAllNews();

  // 2. Ejecutamos las consultas en paralelo
  const [stats, weekly, words, municipalityData, dailySummary] = await Promise.all([
    getDashboardStats(),      
    getWeeklyActivity(),      
    getWordFrequencies(),     
    getMunicipalityArticles(),
    getDailySummary(),        
  ]);

  // --- LÓGICA DE INTELIGENCIA DE SEGURIDAD ---
  const highRisks = (municipalityData as any[] || []).filter((a: any) => a.threat_level === 'ALTO');

  const validSentiments = (municipalityData as any[] || []).filter((a: any) => a.sentiment !== null);
  const totalSentiment = validSentiments.reduce((acc: number, a: any) => acc + (Number(a.sentiment) || 0), 0);
  const avgSentiment = validSentiments.length > 0 
    ? (totalSentiment / validSentiments.length).toFixed(2) 
    : "0.00";

  // 3. REPORTE ESTRATÉGICO (Por ahora dummy, luego lo traemos de la IA)
  const strategicReport = "SITREP: Se identifica una concentración de alertas en el área metropolitana de Montería y el Bajo Sinú. Los niveles de riesgo 'ALTO' están vinculados principalmente a temas de orden público y seguridad ciudadana. Se recomienda monitoreo constante de las fuentes en Sahagún debido a un incremento en menciones de infraestructura.";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--bg-base)" }}>
      <Header total={total} fetchedAt={fetchedAt} />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-6 pt-6">
        
        {/* --- AQUÍ SE COLOCA EL PANEL ESTRATÉGICO --- */}
        {/* Lo ponemos justo arriba de los gráficos para que sea lo primero que vea el analista */}
        <StrategicPanel report={strategicReport} />

        <Dashboard 
          stats={stats as any} 
          weekly={weekly as any} 
          words={words as any} 
          neighborhoodArticles={municipalityData as any} 
          dailySummary={dailySummary as any}
          highRisks={highRisks as any}
          avgSentiment={avgSentiment}
        />

        <ArticleSection articles={articles} />
      </main>

      <footer className="text-center text-xs py-8"
        style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
        DATACORE Monitor de Seguridad · Ing. Javier Cardenas · {new Date().getFullYear()}
      </footer>
    </div>
  );
}