import OpenAI from "openai";

// Inicializamos el cliente de DeepSeek usando el SDK de OpenAI
const deepseek = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: "https://api.deepseek.com", // Muy importante para que apunte a DeepSeek
});

export async function classifyArticles(articles: Article[]): Promise<Article[]> {
  try {
    // Definimos el prompt para el análisis de seguridad en Córdoba
    const prompt = `Analiza los siguientes artículos de noticias y clasifícalos en formato JSON. 
    Para cada artículo, identifica: 
    1. Categoría (Seguridad, Orden Público, Salud, etc.)
    2. Municipio de Córdoba (debe ser uno de: Montería, Cereté, Sahagún, etc.)
    3. Nivel de riesgo (Bajo, Medio, Alto).
    
    Artículos a procesar: ${JSON.stringify(articles)}`;

    const response = await deepseek.chat.completions.create({
      model: "deepseek-chat", // El modelo estándar de DeepSeek
      messages: [
        { role: "system", content: "Eres un experto en análisis de seguridad y experto en la geografía del departamento de Córdoba, Colombia. Responde estrictamente en formato JSON." },
        { role: "user", content: prompt },
      ],
      response_format: { type: 'json_object' } // Mantiene la consistencia que tenías con Gemini
    });

    const result = JSON.parse(response.choices[0].message.content || "[]");
    
    // Aquí mapeas el resultado a tu estructura de Article[]
    return result.articles || result; 

  } catch (error) {
    console.error("Error con DeepSeek:", error);
    return articles; // Retorna los artículos originales si falla
  }
}