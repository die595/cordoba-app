// barrios.ts

export const CONFIG_MUNICIPIOS: Record<string, { coords: [number, number], color: string }> = {
  "Montería": { coords: [8.751, -75.881], color: "#3b82f6" },          // Azul
  "Cereté": { coords: [8.883, -75.791], color: "#10b981" },            // Esmeralda
  "Sahagún": { coords: [8.947, -75.448], color: "#f59e0b" },           // Ámbar
  "Lorica": { coords: [9.239, -75.813], color: "#8b5cf6" },            // Violeta
  "Montelíbano": { coords: [7.979, -75.417], color: "#06b6d4" },       // Cian
  "Planeta Rica": { coords: [8.407, -75.584], color: "#f43f5e" },      // Rosa
  "Tierralta": { coords: [8.173, -76.059], color: "#ef4444" },         // Rojo
  "Chinú": { coords: [9.106, -75.398], color: "#a855f7" },             // Púrpura
  "Ciénaga de Oro": { coords: [8.876, -75.621], color: "#ec4899" },    // Rosado
  "Buenavista": { coords: [8.182, -75.525], color: "#84cc16" },        // Lima
  "Ayapel": { coords: [8.313, -75.147], color: "#0ea5e9" },            // Cielo
  "Caucasia": { coords: [7.981, -75.193], color: "#71717a" }           // Gris (Antioquia)
};

// Mantén esta para compatibilidad con tu código actual de coordenadas
export const UBICACIONES_CORDOBA: Record<string, [number, number]> = 
  Object.fromEntries(Object.entries(CONFIG_MUNICIPIOS).map(([k, v]) => [k, v.coords]));