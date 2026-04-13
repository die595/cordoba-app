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
    
    // Eliminamos ruido de otras regiones
    if (text.includes("ca") || text.includes("va")) return false;

    // 1. ¿Menciona alguno de los municipios que ya tenemos en el mapa?
    const hasLocation = MUNICIPIOS_ACTUALES.some(muni => text.includes(muni));
    
    // 2. ¿Es una de las alertas de seguridad que solicitaste?
    const isSecurityAlert = ALERT_KEYWORDS.some(key => text.includes(key));

    // Solo pasa si tiene ubicación reconocida Y es un tema de seguridad
    return hasLocation && isSecurityAlert;
  });
}