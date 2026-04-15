import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { classifyArticles } from "@/lib/classify";
import { Article } from "@/lib/types";

export const maxDuration = 300; // 5 min — necesario para procesos largos de IA

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization") ?? "";
  const secret = "cordoba2026";
  
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ 
      error: "Unauthorized", 
      esperaba: `Bearer ${secret}`, 
      recibi: auth 
    }, { status: 401 });
  }

  // 1. Fetch de artículos de los últimos 7 días
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .gte('published_at', new Date(Date.now() - 168 * 60 * 60 * 1000).toISOString());

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // 2. Mapeo inicial (Aseguramos que coincida con la interfaz Article)
  const articles: Article[] = (data ?? []).map((row) => ({
    id: row.id,
    title: row.title,
    source: row.source,
    publishedAt: row.published_at, // Eliminamos el new Date() extra para evitar conflictos de tipo string
    summary: row.summary ?? "",
    url: row.url,
  }));

  const BATCH_SIZE = 50;
  let updated = 0;
  let errors = 0;

  // 3. Procesamiento por lotes (Batches)
  for (let i = 0; i < articles.length; i += BATCH_SIZE) {
    const batch = articles.slice(i, i + BATCH_SIZE);
    try {
      // Forzamos el tipo como 'any' en la respuesta de classifyArticles 
      // para evitar que el "rojito" salte si la interfaz de types.ts no tiene topic/neighborhood
      const classified: any[] = await classifyArticles(batch as any);
      
      // ... después de obtener 'classified' de la IA
const { error: upsertError } = await supabaseAdmin
  .from("articles")
  .upsert(
    classified.map((a) => ({
      id: a.id,
      title: a.title,
      url: a.url,
      source: a.source,
      content: a.content,
      published_at: a.publishedAt,
      // ESTOS CAMPOS DEBEN ESTAR AQUÍ PARA QUE NO SEAN NULL
      topic: a.topic || "General",
      neighborhood: a.neighborhood || "Córdoba",
      threat_level: a.threat_level || "Bajo",
      sentiment: a.sentiment || "Neutral",
      alert: a.alert ?? false,
      summary: a.summary || ""
    })),
    { onConflict: "url" } 
  );

      if (upsertError) {
        console.error(`[reclassify] batch ${i} upsert failed:`, upsertError.message);
        errors += batch.length;
      } else {
        updated += batch.length;
      }
    } catch (err) {
      console.error(`[reclassify] batch ${i} classify failed:`, err);
      errors += batch.length;
    }
  }

  return NextResponse.json({
    total: articles.length,
    updated,
    errors,
    message: `Reclassified ${updated}/${articles.length} articles para Córdoba`,
  });
}