// lib/filter.ts
import { Article } from "./types";

// Municipios que ya tienes configurados en tu mapa
const MUNICIPIOS_ACTUALES = [
  "montería", "monteria", 
  "cereté", "cerete", 
  "sahagún", "sahagun", 
  "lorica", 
  "montelíbano", "montelibano", 
  "planeta rica", 
  "tierralta", 
  "chinú", "chinu", 
  "ciénaga de oro", "cienaga de oro", 
  "buenavista", 
  "ayapel", 
  "puerto libertador",
  "caucasia", // Lo incluimos porque aparece en tus etiquetas recientes
  "córdoba"
];

const ALERT_KEYWORDS = [
  "amenaza", "lesiones personales", "extorsion", "extorsión", "homicidio", 
  "terrorismo", "secuestro", "hurto", "daño medio ambiente", "protesta social", 
  "paro armado", "asesinato", "mineria ilegal", "bloqueo de via", "bloqueo de vía",
  "manifestación", "accidente", "cierre de via", "cierre de vía", "atentado", 
  "desaparición", "desaparecido", "fuerza pública", "atentado terrorista"
];

export function filterCordobaRelevant(articles: any[]) {
  return articles.filter(article => {
    const text = `${article.title} ${article.summary || ""}`.toLowerCase();
    
    const ignoreRegions = ["valle del cauca", "cauca", "vaupés", "casanare"];
    if (ignoreRegions.some(region => text.includes(region))) return false;

    const hasLocation = MUNICIPIOS_ACTUALES.some(muni => text.includes(muni));
    const isSecurityAlert = ALERT_KEYWORDS.some(key => text.includes(key));
    const isGeneralCordoba = text.includes("córdoba") && isSecurityAlert;

    const passes = (hasLocation && isSecurityAlert) || isGeneralCordoba;

    // AHORA SÍ: El log antes del return para poder verlo en Vercel
    console.log(`🔎 [FILTRO] Título: ${article.title.substring(0, 50)}... | Pasa: ${passes}`);

    return passes;
  });
}