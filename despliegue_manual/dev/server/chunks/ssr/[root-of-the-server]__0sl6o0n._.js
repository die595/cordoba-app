module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/timers [external] (timers, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("timers", () => require("timers"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/lib/sources.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RSS_SOURCES",
    ()=>RSS_SOURCES
]);
const RSS_SOURCES = [
    {
        name: "Google News - Puerto Libertador",
        url: "https://news.google.com/rss/search?q=Puerto+Libertador+Cordoba+Colombia&hl=es-419&gl=CO&ceid=CO:es-419",
        filterRequired: true,
        color: "blue"
    },
    {
        name: "Google News - Caucasia",
        url: "https://news.google.com/rss/search?q=Caucasia+Antioquia+when:7d&hl=es-419&gl=CO&ceid=CO:es-419",
        filterRequired: true,
        color: "indigo"
    },
    {
        name: "Google News - Gobernacion Cordoba",
        url: "https://news.google.com/rss/search?q=Cordoba+Colombia+site:cordoba.gov.co+OR+source:%22El+Meridiano%22&hl=es-419&gl=CO&ceid=CO:es-419",
        filterRequired: true,
        color: "yellow"
    },
    {
        name: "Google News - Chicanoticias",
        url: "https://news.google.com/rss/search?q=site:chicanoticias.com+Cordoba+Colombia&hl=es-419&gl=CO&ceid=CO:es-419",
        filterRequired: false,
        color: "green"
    },
    {
        name: "Lalenguacaribe",
        url: "https://lalenguacaribe.co/noticias/judicial/feed/",
        filterRequired: false,
        color: "teal"
    },
    {
        name: "Elmeridiano",
        url: "https://rss.app/feeds/J9FEaiDvuaSe0f8Y.xml",
        filterRequired: false,
        color: "pink"
    },
    {
        name: "LaRazon",
        url: "https://rss.app/feeds/oxwyFvnDQ333t5Bx.xml",
        filterRequired: true,
        color: "green"
    },
    {
        name: "Twitter X",
        url: "https://rss.app/feeds/D9RgavDgEfuD5H9L.xml",
        filterRequired: true,
        color: "lime"
    }
];
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/normalize.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deduplicateArticles",
    ()=>deduplicateArticles,
    "normalizeArticle",
    ()=>normalizeArticle
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function stripHtml(html) {
    return html.replace(/<[^>]*>/g, "").replace(/&[a-z]+;/gi, " ").trim();
}
function truncate(text, max) {
    if (text.length <= max) return text;
    return text.slice(0, max - 1).trimEnd() + "…";
}
function normalizeArticle(raw) {
    const title = stripHtml(raw.title || "").trim();
    const url = raw.link || "";
    if (!title || !url) return null;
    const rawSummary = raw.contentSnippet || raw.content || "";
    const summary = truncate(stripHtml(rawSummary), 220);
    const publishedAt = raw.isoDate ? new Date(raw.isoDate) : raw.pubDate ? new Date(raw.pubDate) : new Date();
    const id = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])("md5").update(title.slice(0, 60) + (raw.source || "")).digest("hex");
    return {
        id,
        title,
        source: raw.source || "Desconocido",
        publishedAt,
        summary,
        url
    };
}
function deduplicateArticles(articles) {
    const seen = new Set();
    return articles.filter((a)=>{
        const key = a.title.toLowerCase().replace(/[^a-záéíóúñ0-9\s]/g, "").trim().slice(0, 60);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}
}),
"[project]/lib/supabase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://qckgrpvlexondirgfrwy.supabase.co") || 'https://qckgrpvlexondirgfrwy.supabase.co';
const supabaseKey = ("TURBOPACK compile-time value", "sb_publishable_9DE3B1jZZ7ssKm8Ug1tWag_yuSRNhx9") || 'sb_publishable_9DE3B1jZZ7ssKm8Ug1tWag_yuSRNhx9';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
}),
"[project]/lib/supabaseAdmin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
;
// Server-only admin client — uses service_role key.
// NEVER import this in client components or expose via NEXT_PUBLIC_ vars.
// Used exclusively for INSERT/UPDATE operations in server-side code.
const supabaseUrl = ("TURBOPACK compile-time value", "https://qckgrpvlexondirgfrwy.supabase.co") || 'https://qckgrpvlexondirgfrwy.supabase.co';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'sb_publishable_9DE3B1jZZ7ssKm8Ug1tWag_yuSRNhx9';
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, serviceRoleKey, {
    auth: {
        persistSession: false
    }
});
}),
"[project]/lib/classify.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classifyArticles",
    ()=>classifyArticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
async function classifyArticles(articles) {
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                responseMimeType: "application/json"
            }
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
      ${JSON.stringify(articles.map((a)=>({
                id: a.id,
                title: a.title,
                desc: a.summary
            })))}

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
        return response.articles;
    } catch (error) {
        console.error("Error en clasificación avanzada:", error);
        return articles.map((a)=>({
                ...a,
                topic: "GENERAL",
                neighborhood: "Córdoba",
                sentiment: 0,
                threat_level: "BAJO",
                alert: "Sin alertas detectadas"
            }));
    }
}
}),
"[project]/lib/fetchNews.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAllNews",
    ()=>fetchAllNews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rss$2d$parser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rss-parser/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sources$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sources.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/normalize.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseAdmin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$classify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/classify.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rss$2d$parser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
    timeout: 8000,
    headers: {
        "User-Agent": "Mozilla/5.0 (compatible; CordobaMonitor/1.0)"
    }
});
async function fetchFeed(url, sourceName) {
    try {
        const feed = await parser.parseURL(url);
        const articles = [];
        for (const item of feed.items || []){
            const article = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeArticle"])({
                title: item.title,
                link: item.link,
                contentSnippet: item.contentSnippet,
                content: item.content,
                pubDate: item.pubDate,
                isoDate: item.isoDate,
                source: sourceName
            });
            if (article) articles.push(article);
        }
        return articles;
    } catch (error) {
        console.error(`[fetchFeed] Error en ${sourceName}:`, error);
        return [];
    }
}
async function fetchAllNews() {
    // 1. Obtener noticias de todas las fuentes RSS
    const rssResults = await Promise.allSettled(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sources$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSS_SOURCES"].map((s)=>fetchFeed(s.url, s.name)));
    const allArticles = [];
    for (const result of rssResults){
        if (result.status === "fulfilled") allArticles.push(...result.value);
    }
    // 2. DEDUPLICACIÓN Y ASIGNACIÓN MANUAL DE MUNICIPIOS
    // Esto asegura que el mapa tenga datos aunque falle OpenAI
    const deduped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deduplicateArticles"])(allArticles).map((art)=>{
        const text = `${art.title} ${art.summary || ""}`.toLowerCase();
        if (text.includes("puerto libertador")) art.neighborhood = "Puerto Libertador";
        else if (text.includes("montelibano") || text.includes("montelíbano")) art.neighborhood = "Montelíbano";
        else if (text.includes("sahagun") || text.includes("sahagún")) art.neighborhood = "Sahagún";
        else if (text.includes("planeta rica")) art.neighborhood = "Planeta Rica";
        else if (text.includes("lorica")) art.neighborhood = "Lorica";
        else if (text.includes("tierralta")) art.neighborhood = "Tierralta";
        else if (text.includes("chinú") || text.includes("chinu")) art.neighborhood = "Chinú";
        else if (text.includes("monteria") || text.includes("montería")) art.neighborhood = "Montería";
        else if (text.includes("caucasia")) art.neighborhood = "Caucasia";
        return art;
    });
    deduped.sort((a, b)=>new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    const fetchedAt = new Date().toISOString();
    // 3. PRIMER GUARDADO EN SUPABASE (Con municipios manuales)
    if (deduped.length > 0) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("articles").upsert(deduped.map((a)=>({
                id: a.id,
                title: a.title,
                source: a.source,
                published_at: new Date(a.publishedAt).toISOString(),
                // CAMBIO: Usamos 'description' porque así se llama en tu Supabase
                description: a.summary || "Sin descripción disponible",
                url: a.url,
                fetched_at: fetchedAt,
                // Agregamos un tópico por defecto para que 'Categorías' no sea 1
                topic: (a.topic || "GENERAL").toUpperCase(),
                category: a.topic || "General",
                // Asegúrate de que 'neighborhood' traiga un municipio de Córdoba
                neighborhood: a.neighborhood ?? "Montería"
            })), {
            onConflict: "id"
        });
        if (error) console.error("[supabase] upsert failed:", error.message);
        else console.log(`[supabase] upserted ${deduped.length} articles`);
    }
    // 4. RECUPERAR CLASIFICACIONES PREVIAS
    if (deduped.length > 0) {
        const { data: existing } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("id, topic, neighborhood").in("id", deduped.map((a)=>a.id));
        if (existing && existing.length > 0) {
            const metaMap = new Map(existing.map((r)=>[
                    r.id,
                    {
                        topic: r.topic,
                        neighborhood: r.neighborhood
                    }
                ]));
            for(let i = 0; i < deduped.length; i++){
                const meta = metaMap.get(deduped[i].id);
                if (meta?.topic) deduped[i].topic = meta.topic;
                if (meta?.neighborhood) deduped[i].neighborhood = meta.neighborhood;
            }
        }
    }
    // 5. INTENTAR CLASIFICACIÓN CON IA (Si hay cuota disponible)
    if (deduped.length > 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$classify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classifyArticles"])(deduped).then((classified)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("articles").upsert(classified.map((a)=>({
                    id: a.id,
                    title: a.title,
                    source: a.source,
                    published_at: new Date(a.publishedAt).toISOString(),
                    description: a.summary,
                    url: a.url,
                    topic: a.topic ?? null,
                    neighborhood: a.neighborhood ?? null,
                    fetched_at: fetchedAt
                })), {
                onConflict: "id"
            })).catch((err)=>console.error("[classify] failed (Check OpenAI Quota):", err.message));
    }
    return {
        articles: deduped,
        fetchedAt,
        total: deduped.length
    };
}
}),
"[project]/lib/stats.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDailySummary",
    ()=>getDailySummary,
    "getDashboardStats",
    ()=>getDashboardStats,
    "getMunicipalityArticles",
    ()=>getMunicipalityArticles,
    "getWeeklyActivity",
    ()=>getWeeklyActivity,
    "getWordFrequencies",
    ()=>getWordFrequencies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-rsc] (ecmascript)");
;
;
// 1. CONFIGURACIÓN DE IA (Cambio a modelo estable para evitar error 404)
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
});
// 2. LISTA MAESTRA DE MUNICIPIOS DE CÓRDOBA
const MUNICIPIOS_CORDOBA = [
    "Montería",
    "Cereté",
    "Lorica",
    "Sahagún",
    "Montelíbano",
    "Puerto Libertador",
    "Tierralta",
    "Planeta Rica",
    "Ciénaga de Oro",
    "Chinú"
];
async function getDashboardStats() {
    const fifteenDaysAgo = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString();
    const [totalRes, last24hRes, byTopicRes, bySourceRes] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("*", {
            count: "exact",
            head: true
        }).in("neighborhood", MUNICIPIOS_CORDOBA),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("*", {
            count: "exact",
            head: true
        }).gte("fetched_at", fifteenDaysAgo).in("neighborhood", MUNICIPIOS_CORDOBA),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("topic").not("topic", "is", null).in("neighborhood", MUNICIPIOS_CORDOBA),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("source").in("neighborhood", MUNICIPIOS_CORDOBA)
    ]);
    const topicCounts = new Map();
    for (const row of byTopicRes.data ?? []){
        const t = row.topic;
        topicCounts.set(t, (topicCounts.get(t) ?? 0) + 1);
    }
    const byTopic = [
        ...topicCounts.entries()
    ].map(([topic, count])=>({
            topic,
            count
        })).sort((a, b)=>b.count - a.count);
    const sourceCounts = new Map();
    for (const row of bySourceRes.data ?? []){
        const s = row.source;
        sourceCounts.set(s, (sourceCounts.get(s) ?? 0) + 1);
    }
    const bySource = [
        ...sourceCounts.entries()
    ].map(([source, count])=>({
            source,
            count
        })).sort((a, b)=>b.count - a.count);
    return {
        total: totalRes.count ?? 0,
        last24h: last24hRes.count ?? 0,
        byTopic: byTopic,
        byTopic24h: [],
        bySource
    };
}
async function getMunicipalityArticles() {
    const fifteenDaysAgo = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("*").in("neighborhood", MUNICIPIOS_CORDOBA).gte("fetched_at", fifteenDaysAgo).order("published_at", {
        ascending: false
    });
    if (error) return null;
    return data;
}
async function getDailySummary() {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("title, resumen, neighborhood").in("neighborhood", MUNICIPIOS_CORDOBA).gte("fetched_at", yesterday).limit(30);
    if (!data || data.length === 0) return "No hay noticias recientes para resumir.";
    const headlines = data.map((r, i)=>`${i + 1}. ${r.title}`).join("\n");
    const prompt = `Analiza estas noticias de Córdoba, Colombia y haz un resumen de 2 párrafos:\n${headlines}`;
    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        return "Análisis no disponible.";
    }
}
async function getWeeklyActivity() {
    const fifteenDaysAgo = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString();
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("published_at, fetched_at, neighborhood").in("neighborhood", MUNICIPIOS_CORDOBA).gte("fetched_at", fifteenDaysAgo);
    const counts = new Map();
    for (const row of data ?? []){
        const dateValue = row.fetched_at || row.published_at;
        if (dateValue) {
            const d = new Date(dateValue);
            const key = `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
            counts.set(key, (counts.get(key) ?? 0) + 1);
        }
    }
    return Array.from(counts.entries()).map(([date, count])=>({
            date,
            count
        })).sort((a, b)=>a.date.localeCompare(b.date));
}
async function getWordFrequencies() {
    const fifteenDaysAgo = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString();
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("title, resumen").in("neighborhood", MUNICIPIOS_CORDOBA).gte("fetched_at", fifteenDaysAgo);
    if (!data) return [];
    const freq = {};
    data.forEach((a)=>{
        const text = (a.title + " " + (a.resumen || "")).toLowerCase();
        const words = text.split(/\s+/);
        words.forEach((w)=>{
            const word = w.replace(/[^a-zñáéíóú]/g, "");
            if (word.length > 4) freq[word] = (freq[word] ?? 0) + 1;
        });
    });
    return Object.entries(freq).map(([text, value])=>({
            text,
            value
        })).sort((a, b)=>b.value - a.value).slice(0, 20);
}
}),
"[project]/components/ArticleSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleSection",
    ()=>ArticleSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ArticleSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ArticleSection() from the server but ArticleSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ArticleSection.tsx <module evaluation>", "ArticleSection");
}),
"[project]/components/ArticleSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleSection",
    ()=>ArticleSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ArticleSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ArticleSection() from the server but ArticleSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ArticleSection.tsx", "ArticleSection");
}),
"[project]/components/ArticleSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArticleSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ArticleSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArticleSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ArticleSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArticleSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/RefreshController.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefreshController",
    ()=>RefreshController
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const RefreshController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RefreshController() from the server but RefreshController is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/RefreshController.tsx <module evaluation>", "RefreshController");
}),
"[project]/components/RefreshController.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefreshController",
    ()=>RefreshController
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const RefreshController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RefreshController() from the server but RefreshController is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/RefreshController.tsx", "RefreshController");
}),
"[project]/components/RefreshController.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RefreshController$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/RefreshController.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RefreshController$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/RefreshController.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RefreshController$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RefreshController$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RefreshController.tsx [app-rsc] (ecmascript)");
;
;
;
function Header({ total, fetchedAt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-10 px-4 py-3",
        style: {
            backgroundColor: "#050b17",
            borderBottom: "1px solid var(--border)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto flex items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            className: "w-4 h-4 text-sky-400"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-sm font-bold tracking-widest uppercase text-white",
                                    children: "Monitor Dpto-Cordoba"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:flex items-center gap-1.5 text-xs",
                                    style: {
                                        color: "var(--text-muted)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex h-1.5 w-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this),
                                        "EN VIVO"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    style: {
                                        color: "var(--text-muted)"
                                    },
                                    children: [
                                        total,
                                        " artículos"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RefreshController$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RefreshController"], {
                    fetchedAt: fetchedAt
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Dashboard.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Dashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Dashboard() from the server but Dashboard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Dashboard.tsx <module evaluation>", "Dashboard");
}),
"[project]/components/Dashboard.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Dashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Dashboard() from the server but Dashboard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Dashboard.tsx", "Dashboard");
}),
"[project]/components/Dashboard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/Dashboard.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/Dashboard.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchNews$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fetchNews.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stats.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArticleSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ArticleSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dashboard.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const revalidate = 1800; // Se actualiza cada 30 minutos
async function Home() {
    // 1. Obtenemos las noticias y las subimos a Supabase
    const { articles, fetchedAt, total } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchNews$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAllNews"])();
    // 2. Ejecutamos todas las consultas de estadísticas en paralelo
    const [stats, weekly, words, municipalityData, dailySummary] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDashboardStats"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWeeklyActivity"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWordFrequencies"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMunicipalityArticles"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDailySummary"])()
    ]);
    // --- LÓGICA DE INTELIGENCIA DE SEGURIDAD ---
    // Filtramos solo las noticias que Gemini marcó como amenaza ALTA
    const highRisks = municipalityData.filter((a)=>a.threat_level === 'ALTO');
    // Calculamos el promedio de sentimiento del departamento
    const validSentiments = municipalityData.filter((a)=>a.sentiment !== null);
    const totalSentiment = validSentiments.reduce((acc, a)=>acc + (Number(a.sentiment) || 0), 0);
    const avgSentiment = validSentiments.length > 0 ? (totalSentiment / validSentiments.length).toFixed(2) : "0.00";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        style: {
            backgroundColor: "var(--bg-base)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {
                total: total,
                fetchedAt: fetchedAt
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Dashboard"], {
                        stats: stats,
                        weekly: weekly,
                        words: words,
                        neighborhoodArticles: municipalityData,
                        dailySummary: dailySummary,
                        highRisks: highRisks,
                        avgSentiment: avgSentiment
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArticleSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleSection"], {
                        articles: articles
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "text-center text-xs py-8",
                style: {
                    color: "var(--text-muted)",
                    borderTop: "1px solid var(--border)"
                },
                children: [
                    "DATACORE Monitor de Seguridad · Ing. Javier Cardenas · ",
                    new Date().getFullYear()
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0sl6o0n._.js.map