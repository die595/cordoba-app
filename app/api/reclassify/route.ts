import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { classifyArticles } from "@/lib/classify";
import { Article } from "@/lib/types";

export const maxDuration = 300; // 5 min — needed for large batches

export async function POST(req: NextRequest) {
  // Require Authorization: Bearer <RECLASSIFY_SECRET>
  //const secret = process.env.RECLASSIFY_SECRET;
  const auth = req.headers.get("authorization") ?? "";
  const secret = "cordoba2026";
  console.log("SECRETO EN ENV:", process.env.RECLASSIFY_SECRET);
  console.log("TOKEN RECIBIDO:", auth);
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ 
      error: "Unauthorized", 
      esperaba: `Bearer ${secret}`, 
      recibi: auth 
    }, { status: 401 });
  }

  // Fetch all articles (id, title, summary needed for classify)
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .gte('published_at', new Date(Date.now() - 168 * 60 * 60 * 1000).toISOString())

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const articles: Article[] = (data ?? []).map((row) => ({
    id: row.id as string,
    title: row.title as string,
    source: row.source as string,
    publishedAt: new Date(row.published_at as string).toISOString(),
    summary: row.summary as string ?? "",
    url: row.url as string,
  }));


  const BATCH_SIZE = 50;
  let updated = 0;
  let errors = 0;

  for (let i = 0; i < articles.length; i += BATCH_SIZE) {
    const batch = articles.slice(i, i + BATCH_SIZE);
    try {
      const classified = await classifyArticles(batch);
      const { error: upsertError } = await supabaseAdmin.from("articles").upsert(
        classified.map((a) => ({
          id: a.id,
          title: a.title,
          source: a.source,
          published_at: new Date(a.publishedAt).toISOString(),
          summary: a.summary,
          url: a.url,
          topic: a.topic ?? null,
          neighborhood: a.neighborhood ?? null,
        })),
        { onConflict: "id" }
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
    message: `Reclassified ${updated}/${articles.length} articles`,
  });
}
