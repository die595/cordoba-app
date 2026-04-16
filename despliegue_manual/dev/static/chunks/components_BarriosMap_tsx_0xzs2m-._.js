(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/BarriosMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarriosMap",
    ()=>BarriosMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopicBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TopicBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// 1. Configuración de Coordenadas y Colores por Municipio
const MUNICIPIOS_CONFIG = {
    "Montería": {
        coords: [
            8.7479,
            -75.8814
        ],
        color: "#3b82f6"
    },
    "Cereté": {
        coords: [
            8.8833,
            -75.7900
        ],
        color: "#10b981"
    },
    "Lorica": {
        coords: [
            9.2394,
            -75.8139
        ],
        color: "#8b5cf6"
    },
    "Sahagún": {
        coords: [
            8.9472,
            -75.4444
        ],
        color: "#f59e0b"
    },
    "Montelíbano": {
        coords: [
            7.9794,
            -75.4178
        ],
        color: "#06b6d4"
    },
    "Puerto Libertador": {
        coords: [
            7.8888,
            -75.6714
        ],
        color: "#6366f1"
    },
    "Tierralta": {
        coords: [
            8.1733,
            -76.0594
        ],
        color: "#ef4444"
    },
    "Planeta Rica": {
        coords: [
            8.4131,
            -75.5839
        ],
        color: "#f43f5e"
    },
    "Ciénaga de Oro": {
        coords: [
            8.8761,
            -75.6203
        ],
        color: "#ec4899"
    },
    "Chinú": {
        coords: [
            9.1064,
            -75.3981
        ],
        color: "#a855f7"
    },
    "Caucasia": {
        coords: [
            7.981,
            -75.193
        ],
        color: "#71717a"
    } // Gris
};
function BarriosMap({ articles }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BarriosMap.useEffect": ()=>{
            if (!mapRef.current) return;
            // Si ya existe el mapa, solo actualizamos los marcadores
            if (mapInstanceRef.current) {
                updateMarkers(mapInstanceRef.current);
                return;
            }
            // Carga dinámica de Leaflet para evitar errores de SSR
            __turbopack_context__.A("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)").then({
                "BarriosMap.useEffect": (L)=>{
                    // Fix para iconos por defecto
                    delete L.Icon.Default.prototype._getIconUrl;
                    L.Icon.Default.mergeOptions({
                        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
                        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
                    });
                    if (mapRef.current && mapRef.current._leaflet_id) {
                        return;
                    }
                    const map = L.map(mapRef.current, {
                        center: [
                            8.7479,
                            -75.8814
                        ],
                        zoom: 8,
                        scrollWheelZoom: false
                    });
                    mapInstanceRef.current = map;
                    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
                        attribution: '&copy; CARTO',
                        maxZoom: 19
                    }).addTo(map);
                    updateMarkers(map, L);
                }
            }["BarriosMap.useEffect"]);
            function updateMarkers(map, LLib) {
                const L = LLib || window.L;
                if (!L) return;
                // Limpiar marcadores previos para evitar duplicados
                map.eachLayer({
                    "BarriosMap.useEffect.updateMarkers": (layer)=>{
                        if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
                            map.removeLayer(layer);
                        }
                    }
                }["BarriosMap.useEffect.updateMarkers"]);
                // Agrupar por municipio
                const byCity = new Map();
                articles.forEach({
                    "BarriosMap.useEffect.updateMarkers": (art)=>{
                        const city = art.neighborhood || art.municipio;
                        if (city && MUNICIPIOS_CONFIG[city]) {
                            if (!byCity.has(city)) byCity.set(city, []);
                            byCity.get(city).push(art);
                        }
                    }
                }["BarriosMap.useEffect.updateMarkers"]);
                // Dibujar marcadores
                byCity.forEach({
                    "BarriosMap.useEffect.updateMarkers": (arts, cityName)=>{
                        const config = MUNICIPIOS_CONFIG[cityName];
                        const color = config.color;
                        const icon = L.divIcon({
                            html: `
            <div style="
              background: ${color};
              color: white;
              border: 2px solid white;
              border-radius: 50%;
              width: 30px;
              height: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              font-weight: bold;
              box-shadow: 0 0 15px ${color}cc;
            ">
              ${arts.length}
            </div>
          `,
                            className: "",
                            iconSize: [
                                30,
                                30
                            ]
                        });
                        // Popup con estilo oscuro
                        let popupHtml = `
          <div style="min-width:200px; padding: 5px;">
            <strong style="color:white; font-size:14px; border-bottom:1px solid #334155; display:block; padding-bottom:5px; margin-bottom:8px;">
              ${cityName} (${arts.length} reportes)
            </strong>
        `;
                        arts.slice(0, 99).forEach({
                            "BarriosMap.useEffect.updateMarkers": (a)=>{
                                const topicColor = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopicBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOPIC_COLORS_HEX"][a.topic] || "#94a3b8";
                                popupHtml += `
            <div style="margin-bottom:10px;">
              <span style="color:${topicColor}; font-size:9px; font-weight:bold; text-transform:uppercase;">${a.topic || 'General'}</span><br/>
              <a href="${a.url}" target="_blank" style="color:#38bdf8; text-decoration:none; font-size:12px; line-height:1.2;">${a.title}</a>
            </div>
          `;
                            }
                        }["BarriosMap.useEffect.updateMarkers"]);
                        popupHtml += `</div>`;
                        L.marker(config.coords, {
                            icon
                        }).bindPopup(popupHtml, {
                            className: "cordoba-popup"
                        }).addTo(map);
                    }
                }["BarriosMap.useEffect.updateMarkers"]);
            }
            return ({
                "BarriosMap.useEffect": ()=>{
                // No removemos el mapa aquí para evitar parpadeos en cada actualización de artículos,
                // la lógica de updateMarkers se encarga de los datos.
                }
            })["BarriosMap.useEffect"];
        }
    }["BarriosMap.useEffect"], [
        articles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            }, void 0, false, {
                fileName: "[project]/components/BarriosMap.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .cordoba-popup .leaflet-popup-content-wrapper { 
          background: #0f172a; 
          border: 1px solid #1e293b; 
          color: #fff; 
          border-radius: 8px;
        }
          /* ESTA ES LA PARTE CLAVE: Define el alto máximo y el scroll */
          .cordoba-popup .leaflet-popup-content {
          max-height: 400px; /* Ajusta este valor a tu gusto */
          overflow-y: auto;  /* Habilita el deslizador vertical */
          margin: 13px;      /* Espaciado interno */
          padding-right: 5px;
        }
          /* Personalización de la barra de desplazamiento (opcional) */
          .cordoba-popup .leaflet-popup-content::-webkit-scrollbar {
          width: 6px;
        }
          .cordoba-popup .leaflet-popup-content::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }

        .cordoba-popup .leaflet-popup-tip { background: #0f172a; }
        .leaflet-container { font-family: inherit; }
      `
            }, void 0, false, {
                fileName: "[project]/components/BarriosMap.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapRef,
                className: "w-full h-[500px] rounded-xl border border-slate-800 shadow-2xl overflow-hidden bg-slate-950"
            }, void 0, false, {
                fileName: "[project]/components/BarriosMap.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BarriosMap.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s(BarriosMap, "HGOaeZ8o3YxgkGMPZTdc6qMIX/A=");
_c = BarriosMap;
var _c;
__turbopack_context__.k.register(_c, "BarriosMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BarriosMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/BarriosMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_BarriosMap_tsx_0xzs2m-._.js.map