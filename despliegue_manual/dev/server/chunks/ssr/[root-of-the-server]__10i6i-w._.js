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
"[project]/lib/strategicAnalysis.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateStrategicReport",
    ()=>generateStrategicReport
]);
// lib/strategicAnalysis.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-rsc] (ecmascript) <export OpenAI as default>");
;
const deepseek = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.DEEPSEEK_API_KEY || '',
    baseURL: "https://api.deepseek.com"
});
async function generateStrategicReport(articles) {
    if (!articles || articles.length === 0) return "No hay datos para el análisis.";
    const context = articles.slice(0, 15).map((a)=>`[${a.neighborhood}] ${a.title}`).join("\n");
    const prompt = `Analiza estas noticias de Córdoba y genera un SITREP (Reporte de Situación) estratégico de 3-4 líneas.`;
    try {
        const response = await deepseek.chat.completions.create({
            model: "deepseek-chat",
            messages: [
                {
                    role: "system",
                    content: "Eres un experto en seguridad estratégica."
                },
                {
                    role: "user",
                    content: prompt + "\n\nNoticias:\n" + context
                }
            ]
        });
        return response.choices[0].message.content; // Retorna TEXTO
    } catch (error) {
        console.error("Error en SitRep:", error);
        return "Análisis no disponible.";
    }
} // Revisión final DATACORE.
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

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
        url: "https://news.google.com/rss/search?q=Cordoba+Colombia+when:24h&hl=es-419&gl=CO&ceid=CO:es-419",
        filterRequired: true,
        color: "yellow"
    },
    {
        name: "Google News - Chicanoticias",
        url: "https://chicanoticias.com/feed/",
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
        url: "https://elmeridiano.co/cordoba/feed/",
        filterRequired: false,
        color: "pink"
    },
    {
        name: "LaRazon",
        url: "https://larazon.co/feed/",
        filterRequired: true,
        color: "green"
    },
    {
        name: "Twitter X",
        url: "https://news.google.com/rss/search?q=site:twitter.com+Cordoba+Colombia+judicial+OR+seguridad+when:24h&hl=es-419&gl=CO&ceid=CO:es-419",
        filterRequired: true,
        color: "lime"
    },
    {
        name: "Organis Noticias",
        url: "https://www.facebook.com/organisnoticiasss",
        filterRequired: true,
        color: "lime"
    },
    {
        name: "Piotico 1109",
        url: "https://www.facebook.com/piotico1109",
        filterRequired: true,
        color: "lime"
    }
]; // <-- Solo un cierre aquí
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
        publishedAt: publishedAt instanceof Date ? publishedAt.toISOString() : String(publishedAt),
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
"[project]/lib/supabaseAdmin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dotenv/lib/main.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
;
;
;
// Buscamos el archivo .env.local de forma más agresiva
const envPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), '.env.local');
if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(envPath)) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"]({
        path: envPath
    });
} else {
    // Si falla el primero, probamos un nivel arriba (por si acaso)
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"]({
        path: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(("TURBOPACK compile-time value", "/ROOT/lib"), '../.env.local')
    });
}
// Usamos .trim() para limpiar cualquier espacio o salto de línea invisible
const supabaseUrl = (("TURBOPACK compile-time value", "https://qckgrpvlexondirgfrwy.supabase.co") || '').trim();
const supabaseServiceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();
console.log("--- DEBUG CONEXIÓN ---");
console.log("URL detectada:", supabaseUrl ? `SÍ (${supabaseUrl.substring(0, 20)}...)` : "NO (VACÍO)");
console.log("----------------------");
if (!supabaseUrl || !supabaseUrl.startsWith('http')) {
    throw new Error(`CRÍTICO: URL no válida. Valor: "${supabaseUrl}"`);
}
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceKey);
}),
"[project]/lib/classify.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classifyArticles",
    ()=>classifyArticles
]);
// lib/classify.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-rsc] (ecmascript) <export OpenAI as default>");
;
const deepseek = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.DEEPSEEK_API_KEY || '',
    baseURL: "https://api.deepseek.com"
});
async function classifyArticles(articles) {
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
    const allResults = [];
    for(let i = 0; i < articles.length; i += batchSize){
        const batch = articles.slice(i, i + batchSize);
        const processedBatch = batch.map((a)=>({
                id: a.id,
                title: a.title,
                text: (a.content || "").substring(0, 400)
            }));
        try {
            const response = await deepseek.chat.completions.create({
                model: "deepseek-chat",
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: `Clasifica este lote: ${JSON.stringify(processedBatch)}`
                    }
                ],
                response_format: {
                    type: 'json_object'
                }
            });
            const aiResponse = JSON.parse(response.choices[0].message.content || '{"results":[]}');
            allResults.push(...aiResponse.results || []);
        } catch (error) {
            console.error("Error clasificando lote:", error);
        }
    }
    // --- MAPEO DE NORMALIZACIÓN ---
    // Esto evita errores y asegura que el gráfico reconozca los nombres
    return articles.map((original)=>{
        const iaData = allResults.find((r)=>String(r.id) === String(original.id));
        // Si la IA devuelve algo parecido pero en mayúsculas, lo corregimos aquí:
        const normalizedTopics = {
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
}),
"[project]/lib/facebookScraper.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "scrapeFacebookOrganis",
    ()=>scrapeFacebookOrganis
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$puppeteer$2d$core$29$__ = __turbopack_context__.i("[externals]/puppeteer-core [external] (puppeteer-core, esm_import, [project]/node_modules/puppeteer-core)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$sparticuz$2f$chromium__$5b$external$5d$__$2840$sparticuz$2f$chromium$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$sparticuz$2f$chromium$29$__ = __turbopack_context__.i("[externals]/@sparticuz/chromium [external] (@sparticuz/chromium, esm_import, [project]/node_modules/@sparticuz/chromium)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$puppeteer$2d$core$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$sparticuz$2f$chromium__$5b$external$5d$__$2840$sparticuz$2f$chromium$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$sparticuz$2f$chromium$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$puppeteer$2d$core$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$sparticuz$2f$chromium__$5b$external$5d$__$2840$sparticuz$2f$chromium$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$sparticuz$2f$chromium$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function scrapeFacebookOrganis(url) {
    console.log(`Iniciando scrape en: ${url}`);
    let browser = null;
    // Detectamos si estamos en local o en Vercel
    const isLocal = ("TURBOPACK compile-time value", "development") === 'development' || !process.env.VERCEL;
    try {
        const launchOptions = ("TURBOPACK compile-time truthy", 1) ? {
            // RUTA LOCAL: Ajusta esta ruta a tu Chrome o Edge
            executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            headless: true,
            args: [
                '--no-sandbox'
            ]
        } : "TURBOPACK unreachable";
        console.log(`🌐 Iniciando navegador en modo ${("TURBOPACK compile-time truthy", 1) ? 'LOCAL' : "TURBOPACK unreachable"}...`);
        browser = await __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$puppeteer$2d$core$29$__["default"].launch(launchOptions);
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');
        await page.goto("https://www.facebook.com/organisnoticiasss", {
            waitUntil: "networkidle2",
            timeout: 60000
        });
        // Extraer posts
        const posts = await page.evaluate(()=>{
            const elements = document.querySelectorAll('div[data-ad-preview="message"]');
            return Array.from(elements).slice(0, 5).map((el)=>el.textContent);
        });
        return posts;
    } catch (error) {
        console.error("❌ Error en Scraper Integrado:", error);
        return [];
    } finally{
        if (browser) await browser.close();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/fetchNews.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "fetchAllNews",
    ()=>fetchAllNews
]);
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$strategicAnalysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/strategicAnalysis.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dotenv/lib/main.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rss$2d$parser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rss-parser/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__v5$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist-node/v5.js [app-rsc] (ecmascript) <locals> <export default as v5>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sources$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sources.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/normalize.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseAdmin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$classify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/classify.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$facebookScraper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/facebookScraper.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$facebookScraper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$facebookScraper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"]({
    path: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), '.env.local')
});
const NAMESPACE_UUID = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
// --- CONTROL TEMPORAL (15 DÍAS) ---
function esNoticiaReciente(fechaIso) {
    if (!fechaIso) return true;
    const fechaNoticia = new Date(fechaIso).getTime();
    const quinceDiasAtras = Date.now() - 15 * 24 * 60 * 60 * 1000;
    return fechaNoticia >= quinceDiasAtras;
}
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
        const latestItems = (feed.items || []).slice(0, 15);
        for (const item of latestItems){
            const article = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeArticle"])({
                title: item.title,
                link: item.link,
                contentSnippet: item.contentSnippet,
                content: item.content,
                pubDate: item.pubDate,
                isoDate: item.isoDate,
                source: sourceName
            });
            if (article && article.title) articles.push(article);
        }
        return articles;
    } catch (error) {
        console.error(`[fetchFeed] Error en ${sourceName}:`, error);
        return [];
    }
}
async function fetchAllNews() {
    console.log("🚀 [DATACORE] Recolección amplia con ventana temporal de 15 días...");
    // 1. Recolectar noticias RSS (Filtramos solo las que NO son de Facebook)
    const rssOnlySources = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sources$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSS_SOURCES"].filter((s)=>!s.url.includes("facebook.com"));
    const rssResults = await Promise.allSettled(rssOnlySources.map((s)=>fetchFeed(s.url, s.name)));
    let rawArticles = [];
    for (const result of rssResults){
        if (result.status === "fulfilled") rawArticles.push(...result.value);
    }
    // 2. Recolectar Facebook Dinámicamente (Organis, Piotico, etc.)
    try {
        const fbSources = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sources$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSS_SOURCES"].filter((s)=>s.url.includes("facebook.com"));
        console.log(`🕵️ Detectadas ${fbSources.length} fuentes de Facebook...`);
        for (const source of fbSources){
            console.log(`📡 Extrayendo datos de: ${source.name}...`);
            // Enviamos la URL específica de la fuente al scraper
            const fbPosts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$facebookScraper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scrapeFacebookOrganis"])(source.url);
            if (fbPosts && fbPosts.length > 0) {
                const fbArticles = fbPosts.map((text, index)=>{
                    const cleanText = text || '';
                    // Añadimos source.name al hash para evitar colisiones de ID entre páginas
                    const generatedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__v5$3e$__["v5"])(cleanText.substring(0, 100) + index + source.name, NAMESPACE_UUID);
                    return {
                        id: generatedId,
                        title: cleanText.substring(0, 90).replace(/\n/g, " ") + "...",
                        summary: cleanText,
                        source: source.name,
                        publishedAt: new Date().toISOString(),
                        url: source.url,
                        neighborhood: "Córdoba"
                    };
                });
                rawArticles.push(...fbArticles);
                console.log(`✅ ${fbArticles.length} publicaciones de ${source.name} añadidas.`);
            }
        }
    } catch (fbErr) {
        console.error("❌ Error recolectando Facebook:", fbErr);
    }
    // 3. Filtrar solo por FECHA (15 días) y mapear barrios
    const processedArticles = rawArticles.filter((art)=>esNoticiaReciente(art.publishedAt)).map((art)=>{
        const text = `${art.title} ${art.summary || ""}`.toLowerCase();
        if (text.includes("puerto libertador")) art.neighborhood = "Puerto Libertador";
        else if (text.includes("montelibano") || text.includes("montelíbano")) art.neighborhood = "Montelíbano";
        else if (text.includes("sahagun") || text.includes("sahagún")) art.neighborhood = "Sahagún";
        else if (text.includes("planeta rica")) art.neighborhood = "Planeta Rica";
        else if (text.includes("lorica")) art.neighborhood = "Lorica";
        else if (text.includes("tierralta")) art.neighborhood = "Tierralta";
        else if (text.includes("chinú") || text.includes("chinu")) art.neighborhood = "Chinú";
        else if (text.includes("monteria") || text.includes("montería")) art.neighborhood = "Montería";
        else if (text.includes("cereté") || text.includes("cerete")) art.neighborhood = "Cereté";
        else if (text.includes("caucasia")) art.neighborhood = "Caucasia";
        else if (text.includes("ayapel")) art.neighborhood = "Ayapel";
        else if (text.includes("valencia")) art.neighborhood = "Valencia";
        else art.neighborhood = "Córdoba";
        return art;
    });
    const deduped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deduplicateArticles"])(processedArticles);
    deduped.sort((a, b)=>new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    const fetchedAt = new Date().toISOString();
    let finalArticles = deduped;
    if (deduped.length > 0) {
        try {
            console.log(`🧠 Clasificando ${deduped.length} noticias recientes con IA...`);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$classify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classifyArticles"])(deduped);
            finalArticles = Array.isArray(result) ? result : deduped;
        } catch (err) {
            console.error("❌ Error en clasificación IA:", err);
            finalArticles = deduped;
        }
    }
    if (Array.isArray(finalArticles) && finalArticles.length > 0) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("articles").upsert(finalArticles.map((a)=>({
                id: a.id,
                title: a.title,
                source: a.source,
                published_at: new Date(a.publishedAt).toISOString(),
                description: a.summary || "Sin descripción",
                url: a.url,
                fetched_at: fetchedAt,
                topic: a.topic || "General",
                neighborhood: a.neighborhood || "Córdoba",
                threat_level: a.threat_level || "Bajo",
                sentiment: a.sentiment || "Neutral",
                alert: a.alert || false
            })), {
            onConflict: "id"
        });
    }
    if (finalArticles.length > 0) {
        try {
            console.log("📊 Actualizando SitRep estratégico...");
            const reportText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$strategicAnalysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateStrategicReport"])(finalArticles);
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("analysis").upsert({
                id: 1,
                content: reportText,
                created_at: new Date().toISOString()
            });
            console.log("✅ Proceso completado.");
        } catch (err) {
            console.error("❌ Fallo SitRep:", err);
        }
    }
    return {
        articles: finalArticles,
        fetchedAt,
        total: finalArticles.length
    };
}
if (/*TURBOPACK member replacement*/ __turbopack_context__.z.main === module) {
    (async ()=>{
        try {
            const result = await fetchAllNews();
            console.log(`🎉 TOTAL PROCESADO: ${result.total} noticias (últimos 15 días).`);
        } catch (error) {
            console.error("❌ Error Crítico:", error);
        }
    })();
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/supabase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
;
// Deja que Next.js maneje esto solo con process.env
const supabaseUrl = ("TURBOPACK compile-time value", "https://qckgrpvlexondirgfrwy.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "sb_publishable_9DE3B1jZZ7ssKm8Ug1tWag_yuSRNhx9");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
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
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.DEEPSEEK_API_KEY);
const model = genAI.getGenerativeModel({
    model: "deepseek-chat"
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
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const [totalRes, last24hRes, byTopicRes, bySourceRes] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("*", {
            count: "exact",
            head: true
        }).in("neighborhood", MUNICIPIOS_CORDOBA),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("*", {
            count: "exact",
            head: true
        }).gte("fetched_at", oneDayAgo).in("neighborhood", MUNICIPIOS_CORDOBA),
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
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("*").in("neighborhood", MUNICIPIOS_CORDOBA).gte("fetched_at", sevenDaysAgo) // <-- Cambiado de 15 a 7
    .order("published_at", {
        ascending: false
    });
    if (error) return null;
    return data;
}
async function getDailySummary() {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("title, summary, neighborhood").in("neighborhood", MUNICIPIOS_CORDOBA).gte("fetched_at", yesterday).limit(30);
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
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles")// 1. AGREGA LOS CAMPOS AQUÍ (Separados por coma)
    .select("created_at, fetched_at, published_at").in("neighborhood", MUNICIPIOS_CORDOBA).gte("created_at", sevenDaysAgo.toISOString());
    const counts = new Map();
    for (const row of data ?? []){
        // 2. Ahora TypeScript ya reconocerá estos campos
        const dateValue = row.fetched_at || row.published_at || row.created_at;
        if (dateValue) {
            const d = new Date(dateValue);
            const key = `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
            counts.set(key, (counts.get(key) ?? 0) + 1);
        }
    }
    // No olvides retornar los datos formateados para el gráfico
    return Array.from(counts.entries()).map(([date, count])=>({
            date,
            count
        }));
}
async function getWordFrequencies() {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("title, resumen").in("neighborhood", MUNICIPIOS_CORDOBA).gte("fetched_at", sevenDaysAgo);
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
"[project]/components/StrategicPanel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StrategicPanel",
    ()=>StrategicPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function StrategicPanel({ report }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-lg border border-amber-500/30 bg-slate-950 p-1 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/StrategicPanel.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900/50 p-6 rounded-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4 border-b border-slate-800 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold",
                                    children: "⚠️"
                                }, void 0, false, {
                                    fileName: "[project]/components/StrategicPanel.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/StrategicPanel.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-black tracking-widest text-amber-500 uppercase",
                                        children: "SitRep (Situation Report)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/StrategicPanel.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-slate-500 uppercase tracking-tighter",
                                        children: "Análisis Estratégico de Inteligencia Artificial"
                                    }, void 0, false, {
                                        fileName: "[project]/components/StrategicPanel.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/StrategicPanel.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto text-[10px] font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded",
                                children: [
                                    "ID: ",
                                    new Date().toISOString().split('T')[0],
                                    "-DC"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/StrategicPanel.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/StrategicPanel.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed text-slate-300 font-medium selection:bg-amber-500 selection:text-black",
                                children: report
                            }, void 0, false, {
                                fileName: "[project]/components/StrategicPanel.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-2 -right-2 opacity-[0.03] pointer-events-none select-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-6xl font-black",
                                    children: "DATACORE"
                                }, void 0, false, {
                                    fileName: "[project]/components/StrategicPanel.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/StrategicPanel.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/StrategicPanel.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/StrategicPanel.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/StrategicPanel.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StrategicPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StrategicPanel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseAdmin.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchNews$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchNews$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const revalidate = 21600;
async function getLatestSitRep() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("analysis").select("content").eq("id", 1).single();
        if (error || !data) return "SITREP: Esperando actualización de inteligencia...";
        return data.content;
    } catch (e) {
        return "Error al conectar con la base de datos de inteligencia.";
    }
}
async function Home() {
    /**
   * 1. RECOLECCIÓN TOTAL
   * fetchAllNews() ya contiene la lógica para recorrer RSS_SOURCES.
   * Al ejecutarlo aquí, el sistema entra a:
   * - Chicanoticias, El Meridiano, La Razón, Twitter X, etc.
   * - Facebook (Piotico y Organis).
   */ const { articles, fetchedAt, total } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchNews$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAllNews"])();
    // 2. PROCESAMIENTO DE DATOS Y SITREP
    // Ejecutamos las consultas estadísticas y traemos el reporte que la IA acaba de generar
    const [stats, weekly, words, municipalityData, dailySummary, realStrategicReport] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDashboardStats"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWeeklyActivity"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWordFrequencies"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMunicipalityArticles"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDailySummary"])(),
        getLatestSitRep()
    ]);
    // 3. FILTRADO DE ALERTAS CRÍTICAS (Para el Dashboard)
    const highRisks = (municipalityData || []).filter((a)=>a.threat_level === 'ALTO');
    const validSentiments = (municipalityData || []).filter((a)=>a.sentiment !== null);
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
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-6 pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StrategicPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StrategicPanel"], {
                        report: realStrategicReport
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
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
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArticleSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleSection"], {
                        articles: articles
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 69,
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
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__10i6i-w._.js.map