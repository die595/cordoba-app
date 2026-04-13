import { GoogleGenerativeAI } from "@google/generative-ai";
import { Article } from "./types"; // Asegúrate de importar tu interfaz Article

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function classifyArticles(articles: Article[]): Promise<Article[]> {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = `
      Actúa como un Experto en Inteligencia y Gestión de Riesgos para una empresa en Córdoba, Colombia.
      Analiza los siguientes artículos y para cada uno genera un objeto JSON detallado.

      Campos obligatorios por artículo:
      1. topic: Clasifica en (SEGURIDAD, SOCIAL, POLÍTICA, CLIMA, INFRAESTRUCTURA).
      2. neighborhood: Municipio de Córdoba afectado.
      3. summary: Resumen ejecutivo de impacto.
      4. sentiment: Puntaje de -1.0 (muy hostil/negativo) a 1.0 (muy positivo).
      5. threat_level: Nivel de riesgo para la operación empresarial (BAJO, MEDIO, ALTO).
      6. alert: Si el riesgo es ALTO, describe brevemente la posible represalia (ej. Bloqueo de vía, asonada, sabotaje).

      Artículos a procesar:
      ${JSON.stringify(articles.map(a => ({ id: a.id, title: a.title, desc: a.summary })))}

      Responde estrictamente en este formato JSON:
      {
        "articles": [
          { 
            "id": "...", 
            "topic": "...", 
            "neighborhood": "...", 
            "summary": "...", 
            "sentiment": 0.0, 
            "threat_level": "...", 
            "alert": "..." 
          }
        ]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = JSON.parse(result.response.text());
    
    // Unimos los datos originales con los datos de inteligencia de la IA
    const classifiedData = response.articles;
    
    return articles.map(original => {
      const aiData = classifiedData.find((a: any) => a.id === original.id);
      return {
        ...original,
        topic: aiData?.topic || original.topic,
        neighborhood: aiData?.neighborhood || original.neighborhood,
        summary: aiData?.summary || original.summary,
        sentiment: aiData?.sentiment ?? 0,
        threat_level: aiData?.threat_level || "BAJO",
        alert: aiData?.alert || ""
      };
    });

  } catch (error) {
    console.error("Error en clasificación avanzada:", error);
    return articles.map(a => ({ 
      ...a, 
      topic: "GENERAL", 
      neighborhood: "Córdoba", 
      sentiment: 0, 
      threat_level: "BAJO",
      alert: "Sin alertas detectadas"
    }));
  }
}