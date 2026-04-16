// lib/classify.ts
import OpenAI from "openai";

const deepseek = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || '',
  baseURL: "https://api.deepseek.com",
});

export async function classifyArticles(articles: any[]): Promise<any[]> {
  if (!articles || articles.length === 0) return [];

  const systemPrompt = `Eres un experto analista de inteligencia. 
Clasifica cada noticia en una de estas categorías EXACTAS:
- Conflicto Social
- Seguridad Pública
- Judicial
- Salud
- Educación
- Infraestructura y Obras
- Movilidad y Transporte
- Medio Ambiente
- Desarrollo Social
- Desarrollo Económico
- Gobernanza
- Emergencias
- Cultura y Eventos
- General

Responde ÚNICAMENTE en JSON con un array "results" que contenga:
{ "id": "ID", "topic": "CATEGORÍA_EXACTA", "threat_level": "ALTO/MEDIO/BAJO", "alert": true/false }`;

  const batchSize = 10;
  const allResults: any[] = [];

  for (let i = 0; i < articles.length; i += batchSize) {
    const batch = articles.slice(i, i + batchSize);
    const processedBatch = batch.map(a => ({
      id: a.id, 
      title: a.title,
      text: (a.content || "").substring(0, 400)
    }));

    try {
      const response = await deepseek.chat.completions.create({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Clasifica este lote: ${JSON.stringify(processedBatch)}` },
        ],
        response_format: { type: 'json_object' }
      });

      const aiResponse = JSON.parse(response.choices[0].message.content || '{"results":[]}');
      allResults.push(...(aiResponse.results || []));
    } catch (error) {
      console.error("Error clasificando lote:", error);
    }
  }

  // --- MAPEO DE NORMALIZACIÓN ---
  // Esto evita errores y asegura que el gráfico reconozca los nombres
  return articles.map(original => {
    const iaData = allResults.find((r: any) => String(r.id) === String(original.id));
    
    // Si la IA devuelve algo parecido pero en mayúsculas, lo corregimos aquí:
    const normalizedTopics: Record<string, string> = {
      "SEGURIDAD PÚBLICA": "Seguridad Pública",
      "CONFLICTO SOCIAL": "Conflicto Social",
      "JUDICIAL": "Judicial",
      "INFRAESTRUCTURA Y OBRAS": "Infraestructura y Obras",
      "MOVILIDAD Y TRANSPORTE": "Movilidad y Transporte"
    };

    let rawTopic = iaData?.topic || "General";
    // Si el tópico viene en mayúsculas desde la IA, lo traducimos al formato del Badge
    const finalTopic = normalizedTopics[rawTopic.toUpperCase()] || rawTopic;

    return {
      ...original,
      topic: finalTopic, 
      threat_level: iaData?.threat_level || "BAJO",
      alert: !!iaData?.alert
    };
  });
}