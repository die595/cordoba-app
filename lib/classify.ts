// lib/classify.ts
import OpenAI from "openai";

const deepseek = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || '',
  baseURL: "https://api.deepseek.com",
});

export async function classifyArticles(articles: any[]): Promise<any[]> {
  if (!articles || articles.length === 0) return [];

  const batchSize = 10;
  const allResults: any[] = [];

  for (let i = 0; i < articles.length; i += batchSize) {
    const batch = articles.slice(i, i + batchSize);
    const processedBatch = batch.map(a => ({
      id: a.id,
      title: a.title || "Sin título",
      text: (a.content || a.summary || "Sin contenido").substring(0, 500)
    }));

    try {
      const response = await deepseek.chat.completions.create({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "Eres un analista de seguridad. Responde ÚNICAMENTE en JSON puro." },
          { role: "user", content: `Clasifica estas noticias de Córdoba. Devuelve un objeto JSON con una propiedad "results" que sea un array: ${JSON.stringify(processedBatch)}` },
        ],
        response_format: { type: 'json_object' }
      });

      const aiResponse = JSON.parse(response.choices[0].message.content || '{"results":[]}');
      allResults.push(...(aiResponse.results || []));
    } catch (error) {
      console.error(`❌ Error en lote ${i}:`, error);
    }
  }

  // IMPORTANTE: Retornar el ARRAY de noticias original con los datos de la IA
  return articles.map(original => {
    const iaData = allResults.find((r: any) => r.id === original.id);
    return {
      ...original,
      topic: iaData?.topic || "General",
      neighborhood: iaData?.neighborhood || original.neighborhood || "Córdoba",
      threat_level: iaData?.threat_level || "Bajo",
      sentiment: iaData?.sentiment || "Neutral",
      alert: !!iaData?.alert,
      summary: iaData?.summary || (original.content || "").substring(0, 100)
    };
  });
}