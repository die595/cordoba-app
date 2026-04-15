// lib/strategicAnalysis.ts
import OpenAI from "openai";

const deepseek = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || '',
  baseURL: "https://api.deepseek.com",
});

export async function generateStrategicReport(articles: any[]) {
  if (!articles || articles.length === 0) return "No hay datos para el análisis.";

  const context = articles.slice(0, 15).map(a => 
    `[${a.neighborhood}] ${a.title}`
  ).join("\n");

  const prompt = `Analiza estas noticias de Córdoba y genera un SITREP (Reporte de Situación) estratégico de 3-4 líneas.`;

  try {
    const response = await deepseek.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "Eres un experto en seguridad estratégica." },
        { role: "user", content: prompt + "\n\nNoticias:\n" + context }
      ]
    });
    return response.choices[0].message.content; // Retorna TEXTO
  } catch (error) {
    console.error("Error en SitRep:", error);
    return "Análisis no disponible.";
  }
}