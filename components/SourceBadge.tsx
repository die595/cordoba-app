const SOURCE_COLORS: Record<string, string> = {
  "cordoba":           "bg-blue-900/40 text-blue-300 border border-blue-700/40",
  "puerto libertador": "bg-indigo-900/40 text-indigo-300 border border-indigo-700/40",
  "elmeridiano":      "bg-yellow-900/40 text-yellow-300 border border-yellow-700/40",
  "chicanoticias":     "bg-green-900/40 text-green-300 border border-green-700/40",
  "lalenguacaribe":    "bg-teal-900/40 text-teal-300 border border-teal-700/40",
  "eltiempocordoba": "bg-orange-900/40 text-orange-300 border border-orange-700/40",
  "larazon":         "bg-red-900/40 text-red-300 border border-red-700/40",
  
  // NUEVAS FUENTES AÑADIDAS:
  "gobernacion cordoba": "bg-cyan-900/40 text-cyan-300 border border-cyan-700/40",
  "caucasia":            "bg-red-700/40 text-slate-200 border border-slate-500/40",
  "twitter x":           "bg-pink-700/40 text-pink-200 border border-slate-500/40",
};

const DEFAULT_COLOR = "bg-slate-800/40 text-slate-400 border border-slate-600/40";

export function SourceBadge({ source }: { source: string }) {
  // Normalizamos quitando el prefijo de Google y convirtiendo a minúsculas
  const normalizedSource = source
    .replace("Google News - ", "")
    .toLowerCase()
    .trim();

  const color = SOURCE_COLORS[normalizedSource] ?? DEFAULT_COLOR;

  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${color}`}>
      {source.replace("Google News - ", "")} 
    </span>
  );
}