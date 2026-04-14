"use client";

import React from "react";
import { DashboardStats, Topic } from "@/lib/types";
import { DayBucket, NeighborhoodArticle } from "@/lib/stats";
import { TOPIC_COLORS_HEX } from "./TopicBadge";
import { WeeklyChart } from "./charts/WeeklyChart";
import { MapPanel } from "./MapPanel";
import { 
  Newspaper, 
  Clock, 
  TrendingUp, 
  Radio, 
  MapPin, 
  AlertCircle, 
  BarChart3,
  ShieldAlert,
  Users
} from "lucide-react";

// --- COMPONENTES AUXILIARES ---

function StatCard({ label, value, icon, accent }: { 
  label: string; value: number | string; icon: React.ReactNode; accent?: string; 
}) {
  return (
    <div className="rounded-lg p-4 flex flex-col gap-2 shadow-sm transition-transform hover:scale-[1.02]"
      style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "var(--text-muted)" }}>
          {label}
        </span>
        <span style={{ color: accent ?? "var(--text-muted)" }}>{icon}</span>
      </div>
      <span className="text-2xl font-bold tabular-nums"
        style={{ color: accent ?? "var(--text-primary)" }}>
        {value}
      </span>
    </div>
  );
}

function ChartPanel({ title, children, icon }: { title: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div className="rounded-lg p-5 h-full flex flex-col"
      style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
      <div className="flex items-center gap-2 mb-5 border-b border-slate-800 pb-2">
        {icon && <span className="text-slate-500">{icon}</span>}
        <p className="text-[11px] uppercase tracking-widest font-bold" style={{ color: "var(--text-muted)" }}>
          {title}
        </p>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---

export function Dashboard({
  stats,
  weekly,
  neighborhoodArticles,
  dailySummary,
  words: WordFreq = [], // Debe llamarse exactamente así
  highRisks = [],
  avgSentiment = 0,
}: {
  stats: any;
  weekly: DayBucket[];
  neighborhoodArticles: NeighborhoodArticle[];
  dailySummary: string;
  words: DayBucket[]; // Asegúrate de que use WordFreq aquí
  highRisks?: any[];
  avgSentiment?: number | string;
}) {
  const safeArticles = neighborhoodArticles || [];
  const safeWeekly = weekly || [];
  const safeStats = stats || { total: 0, last24h: 0, bySource: [], byTopic: [], byTopic24h: [] };
  
  // Lógica de Municipios
  const municipalCounts = safeArticles.reduce((acc, art) => {
    const city = art.neighborhood || "Sin clasificar";
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedMunicipios = Object.entries(municipalCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  const maxMuniCount = Math.max(...sortedMunicipios.map(m => m.count), 1);

  return (
    <section className="max-w-7xl mx-auto w-full px-4 py-6 flex flex-col gap-6">

      {/* Encabezado DATACORE */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-blue-500 mb-1">DATACORE</h1>
          <p className="text-sm text-slate-400 font-medium">Análisis de Riesgo Departamental · <span className="text-blue-400">Ing. Javier Cardenas</span></p>
        </div>
        <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-full border border-slate-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] text-slate-300 uppercase font-bold">Monitoreo Activo</span>
        </div>
      </div>

      {/* Fila de KPIs con Inteligencia */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard label="Total Noticias" value={safeStats.total} icon={<Newspaper className="w-4 h-4" />} accent="#38bdf8" />
        <StatCard label="Últimas 24h" value={safeStats.last24h} icon={<Clock className="w-4 h-4" />} accent="#4ade80" />
        <StatCard label="Alertas Críticas" value={highRisks.length} icon={<ShieldAlert className="w-4 h-4" />} accent="#f87171" />
        <StatCard 
          label="Clima Social" 
          value={avgSentiment} 
          icon={<Users className="w-4 h-4" />} 
          accent={Number(avgSentiment) < 0 ? "#ef4444" : "#22c55e"} 
        />
        <StatCard label="Fuentes" value={safeStats.bySource.length} icon={<Radio className="w-4 h-4" />} accent="#c084fc" />
      </div>

      {/* PANEL DE REPRESALIAS (Se activa solo si hay riesgos altos) */}
      {highRisks.length > 0 && (
        <div className="bg-red-950/20 border border-red-500/40 rounded-xl p-5 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-red-500 rounded-lg">
              <ShieldAlert className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-red-400">Detección de Represalias e Incidentes Críticos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highRisks.map((risk: any) => (
              <div key={risk.id} className="bg-slate-900/60 p-4 rounded-lg border border-red-900/20 hover:border-red-500/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-black text-red-500 uppercase">{risk.neighborhood}</span>
                  <span className="text-[9px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded">Nivel: {risk.threat_level}</span>
                </div>
                <p className="text-sm text-slate-200 font-medium leading-snug">{risk.alert || risk.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Municipios */}
        <ChartPanel title="Zonas de Mayor Alerta" icon={<MapPin className="w-4 h-4" />}>
          <div className="flex flex-col gap-5">
            {sortedMunicipios.map((muni) => {
              const barWidth = (muni.count / maxMuniCount) * 100;
              const isDanger = muni.count > 10;
              return (
                <div key={muni.name}>
                  <div className="flex justify-between items-end mb-1.5">
                    <span className="text-sm font-bold text-slate-200">{muni.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">{muni.count} reportes</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${isDanger ? 'bg-red-500' : 'bg-blue-500'}`}
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </ChartPanel>

        {/* Resumen IA */}
        <ChartPanel title="Análisis Estratégico IA" icon={<TrendingUp className="w-4 h-4" />}>
          <div className="text-sm leading-relaxed text-slate-300 italic opacity-90">
            {dailySummary && dailySummary !== "Análisis no disponible" ? (
              `"${dailySummary}"`
              ) : (
                <div className="flex items-center gap-2 text-blue-400 animate-pulse">
                  <AlertCircle className="w-4 h-4" />
                  <span>Generando reporte estratégico en tiempo real...</span>
                  </div>
                  )}
                  </div>
                  </ChartPanel>
           

        {/* Tópicos */}
        <ChartPanel title="Distribución de Riesgos" icon={<AlertCircle className="w-4 h-4" />}>
          <div className="flex flex-col gap-4">
            {safeStats.byTopic.slice(0, 6).map(({ topic, count }: { topic: string; count: number }) => (
              <div key={topic} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: TOPIC_COLORS_HEX[topic as Topic] || "#64748b" }} />
                <span className="text-xs font-medium text-slate-400 flex-1">{topic}</span>
                <span className="text-xs font-bold text-white tabular-nums">{count}</span>
              </div>
            ))}
          </div>
        </ChartPanel>
      </div>

      {/* Gráfico Semanal */}
      <ChartPanel title="Tendencia Histórica (7 días)" icon={<BarChart3 className="w-4 h-4" />}>
        <div className="h-[250px] w-full">
          <WeeklyChart data={safeWeekly} />
        </div>
      </ChartPanel>

      {/* Mapa */}
      <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
        <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-slate-400">Geolocalización de Incidentes</h2>
          <span className="text-[10px] text-blue-400 font-bold">{safeArticles.length} Coordenadas en Vigilancia</span>
        </div>
        <MapPanel articles={safeArticles} />
      </div>

    </section>
  );
}