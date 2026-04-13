"use client";

import dynamic from "next/dynamic";
import type { NeighborhoodArticle } from "@/lib/stats";

// Importamos dinámicamente el mapa base
const BarriosMap = dynamic(
  () => import("./BarriosMap").then((m) => m.BarriosMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[500px] text-sm"
        style={{ color: "var(--text-muted)" }}>
        Cargando mapa de Córdoba…
      </div>
    ),
  }
);

export function MapPanel({ articles }: { articles: any[] }) {
  // Pasamos los artículos al mapa. 
  // La lógica de coordenadas CORDOBA_COORDS debe ir dentro de BarriosMap.tsx
  return <BarriosMap articles={articles} />;
}