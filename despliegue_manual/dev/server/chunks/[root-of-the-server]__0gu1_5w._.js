module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "TU_URL_AQUI") || 'https://qckgrpvlexondirgfrwy.supabase.co';
const supabaseKey = ("TURBOPACK compile-time value", "sb_publishable_9DE3B1jZZ7ssKm8Ug1tWag_yuSRNhx9") || 'sb_publishable_9DE3B1jZZ7ssKm8Ug1tWag_yuSRNhx9';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
}),
"[project]/lib/supabaseAdmin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "TU_URL_AQUI");
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseServiceKey) {
    // En lugar de un throw inmediato, podrías hacerlo una función o verificarlo solo al usarlo
    console.warn("⚠️ Advertencia: Variables de Supabase no detectadas aún.");
}
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl || '', supabaseServiceKey || '');
}),
"[project]/lib/classify.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classifyArticles",
    ()=>classifyArticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
const deepseek = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: "https://api.deepseek.com"
});
async function classifyArticles(articles) {
    if (articles.length === 0) return [];
    try {
        const prompt = `Analiza estas noticias del departamento de Córdoba, Colombia y responde con un JSON que contenga un array llamado "articles".
    Para cada noticia usa exactamente estas llaves:
    - topic: (Seguridad, Orden Público, Política, Salud o General)
    - neighborhood: (Nombre del municipio de Córdoba: Montería, Sahagún, Cereté, Lorica, etc.)
    - threat_level: (Bajo, Medio o Alto)
    - sentiment: (Positivo, Neutral o Negativo)
    - alert: (true si es una noticia de violencia o urgencia, false si no)

    Noticias: ${JSON.stringify(articles.map((a)=>({
                id: a.id,
                title: a.title,
                content: a.content
            })))}`;
        const response = await deepseek.chat.completions.create({
            model: "deepseek-chat",
            messages: [
                {
                    role: "system",
                    content: "Eres un analista de seguridad para el departamento de Córdoba. Tu salida debe ser exclusivamente un JSON válido con la estructura solicitada."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            response_format: {
                type: 'json_object'
            }
        });
        const content = response.choices[0].message.content || '{"articles": []}';
        const parsed = JSON.parse(content);
        // Extraemos el array de noticias procesadas
        const classifiedData = parsed.articles || [];
        // Mapeamos de vuelta al array original para no perder los campos como el 'link' o 'id'
        return articles.map((original)=>{
            const infoIA = classifiedData.find((a)=>a.id === original.id);
            return {
                ...original,
                topic: infoIA?.topic || "General",
                neighborhood: infoIA?.neighborhood || "Córdoba",
                threat_level: infoIA?.threat_level || "Bajo",
                sentiment: infoIA?.sentiment || "Neutral",
                alert: infoIA?.alert || false
            };
        });
    } catch (error) {
        console.error("❌ Error en la clasificación con DeepSeek:", error);
        return articles; // Si falla, devuelve los artículos sin procesar para no romper el flujo
    }
}
}),
"[project]/app/api/reclassify/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "maxDuration",
    ()=>maxDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseAdmin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$classify$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/classify.ts [app-route] (ecmascript)");
;
;
;
;
const maxDuration = 300; // 5 min — necesario para procesos largos de IA
async function POST(req) {
    const auth = req.headers.get("authorization") ?? "";
    const secret = "cordoba2026";
    if (auth !== `Bearer ${secret}`) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized",
            esperaba: `Bearer ${secret}`,
            recibi: auth
        }, {
            status: 401
        });
    }
    // 1. Fetch de artículos de los últimos 7 días
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("*").gte('published_at', new Date(Date.now() - 168 * 60 * 60 * 1000).toISOString());
    if (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
    // 2. Mapeo inicial (Aseguramos que coincida con la interfaz Article)
    const articles = (data ?? []).map((row)=>({
            id: row.id,
            title: row.title,
            source: row.source,
            publishedAt: row.published_at,
            summary: row.summary ?? "",
            url: row.url
        }));
    const BATCH_SIZE = 50;
    let updated = 0;
    let errors = 0;
    // 3. Procesamiento por lotes (Batches)
    for(let i = 0; i < articles.length; i += BATCH_SIZE){
        const batch = articles.slice(i, i + BATCH_SIZE);
        try {
            // Forzamos el tipo como 'any' en la respuesta de classifyArticles 
            // para evitar que el "rojito" salte si la interfaz de types.ts no tiene topic/neighborhood
            const classified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$classify$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classifyArticles"])(batch);
            const { error: upsertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("articles").upsert(classified.map((a)=>({
                    id: a.id,
                    title: a.title,
                    source: a.source,
                    published_at: a.publishedAt,
                    summary: a.summary,
                    url: a.url,
                    topic: a.topic ?? null,
                    neighborhood: a.neighborhood ?? null,
                    threat_level: a.threat_level ?? "Bajo",
                    sentiment: a.sentiment ?? "Neutral"
                })), {
                onConflict: "id"
            });
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        total: articles.length,
        updated,
        errors,
        message: `Reclassified ${updated}/${articles.length} articles para Córdoba`
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gu1_5w._.js.map