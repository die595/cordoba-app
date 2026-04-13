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

export const revalidate = 1800; // Se actualiza cada 30 minutos

export default async function Home() {
  // 1. Obtenemos las noticias y las subimos a Supabase
  const { articles, fetchedAt, total } = await fetchAllNews();

  // 2. Ejecutamos las consultas en paralelo sincronizadas (5 variables = 5 funciones)
  const [stats, weekly, words, municipalityData, dailySummary] = await Promise.all([
    getDashboardStats(),      // -> va a stats
    getWeeklyActivity(),      // -> va a weekly
    getWordFrequencies(),     // -> va a words
    getMunicipalityArticles(),// -> va a municipalityData
    getDailySummary(),        // -> va a dailySummary
  ]);

  // --- LÓGICA DE INTELIGENCIA DE SEGURIDAD ---
  
  // Filtramos solo las noticias que Gemini marcó como amenaza ALTA
  const highRisks = (municipalityData as any[] || []).filter((a: any) => a.threat_level === 'ALTO');

  // Calculamos el promedio de sentimiento
  const validSentiments = (municipalityData as any[] || []).filter((a: any) => a.sentiment !== null);
  const totalSentiment = validSentiments.reduce((acc: number, a: any) => acc + (Number(a.sentiment) || 0), 0);
  const avgSentiment = validSentiments.length > 0 
    ? (totalSentiment / validSentiments.length).toFixed(2) 
    : "0.00";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--bg-base)" }}>
      <Header total={total} fetchedAt={fetchedAt} />
      
      <main className="flex-1">
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