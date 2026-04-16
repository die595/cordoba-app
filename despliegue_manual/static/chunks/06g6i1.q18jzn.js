(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5776,o=>{"use strict";var e=o.i(43476),r=o.i(71645),t=o.i(50527);let a={Montería:{coords:[8.7479,-75.8814],color:"#3b82f6"},Cereté:{coords:[8.8833,-75.79],color:"#10b981"},Lorica:{coords:[9.2394,-75.8139],color:"#8b5cf6"},Sahagún:{coords:[8.9472,-75.4444],color:"#f59e0b"},Montelíbano:{coords:[7.9794,-75.4178],color:"#06b6d4"},"Puerto Libertador":{coords:[7.8888,-75.6714],color:"#6366f1"},Tierralta:{coords:[8.1733,-76.0594],color:"#ef4444"},"Planeta Rica":{coords:[8.4131,-75.5839],color:"#f43f5e"},"Ciénaga de Oro":{coords:[8.8761,-75.6203],color:"#ec4899"},Chinú:{coords:[9.1064,-75.3981],color:"#a855f7"},Caucasia:{coords:[7.981,-75.193],color:"#71717a"}};o.s(["BarriosMap",0,function({articles:l}){let i=(0,r.useRef)(null),n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(i.current)return n.current?void e(n.current):(o.A(71400).then(o=>{if(delete o.Icon.Default.prototype._getIconUrl,o.Icon.Default.mergeOptions({iconRetinaUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"}),i.current&&i.current._leaflet_id)return;let r=o.map(i.current,{center:[8.7479,-75.8814],zoom:8,scrollWheelZoom:!1});n.current=r,o.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"&copy; CARTO",maxZoom:19}).addTo(r),e(r,o)}),()=>{});function e(o,e){let r=e||window.L;if(!r)return;o.eachLayer(e=>{(e instanceof r.Marker||e instanceof r.CircleMarker)&&o.removeLayer(e)});let i=new Map;l.forEach(o=>{let e=o.neighborhood||o.municipio;e&&a[e]&&(i.has(e)||i.set(e,[]),i.get(e).push(o))}),i.forEach((e,l)=>{let i=a[l],n=i.color,c=r.divIcon({html:`
            <div style="
              background: ${n};
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
              box-shadow: 0 0 15px ${n}cc;
            ">
              ${e.length}
            </div>
          `,className:"",iconSize:[30,30]}),s=`
          <div style="min-width:200px; padding: 5px;">
            <strong style="color:white; font-size:14px; border-bottom:1px solid #334155; display:block; padding-bottom:5px; margin-bottom:8px;">
              ${l} (${e.length} reportes)
            </strong>
        `;e.slice(0,99).forEach(o=>{let e=t.TOPIC_COLORS_HEX[o.topic]||"#94a3b8";s+=`
            <div style="margin-bottom:10px;">
              <span style="color:${e}; font-size:9px; font-weight:bold; text-transform:uppercase;">${o.topic||"General"}</span><br/>
              <a href="${o.url}" target="_blank" style="color:#38bdf8; text-decoration:none; font-size:12px; line-height:1.2;">${o.title}</a>
            </div>
          `}),s+="</div>",r.marker(i.coords,{icon:c}).bindPopup(s,{className:"cordoba-popup"}).addTo(o)})}},[l]),(0,e.jsxs)("div",{className:"relative w-full",children:[(0,e.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"}),(0,e.jsx)("style",{children:`
        .cordoba-popup .leaflet-popup-content-wrapper { 
          background: #0f172a; 
          border: 1px solid #1e293b; 
          color: #fff; 
          border-radius: 8px;
        }
          /* ESTA ES LA PARTE CLAVE: Define el alto m\xe1ximo y el scroll */
          .cordoba-popup .leaflet-popup-content {
          max-height: 400px; /* Ajusta este valor a tu gusto */
          overflow-y: auto;  /* Habilita el deslizador vertical */
          margin: 13px;      /* Espaciado interno */
          padding-right: 5px;
        }
          /* Personalizaci\xf3n de la barra de desplazamiento (opcional) */
          .cordoba-popup .leaflet-popup-content::-webkit-scrollbar {
          width: 6px;
        }
          .cordoba-popup .leaflet-popup-content::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }

        .cordoba-popup .leaflet-popup-tip { background: #0f172a; }
        .leaflet-container { font-family: inherit; }
      `}),(0,e.jsx)("div",{ref:i,className:"w-full h-[500px] rounded-xl border border-slate-800 shadow-2xl overflow-hidden bg-slate-950"})]})}])},39095,o=>{o.n(o.i(5776))},71400,o=>{o.v(e=>Promise.all(["static/chunks/06r9_3ub2r-4z.js"].map(e=>o.l(e))).then(()=>e(32322)))}]);