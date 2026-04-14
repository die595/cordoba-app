export async function analyzeNewsWithDeepSeek(newsText: string) {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "deepseek-chat", // O deepseek-reasoner si quieres más análisis
      messages: [
        { 
          role: "system", 
          content: "Eres un analista de seguridad para el departamento de Córdoba. Clasifica la noticia y extrae el municipio." 
        },
        { role: "user", content: newsText }
      ],
      temperature: 0.3 // Baja temperatura para mayor precisión técnica
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}