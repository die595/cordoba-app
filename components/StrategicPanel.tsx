import React from 'react';

interface StrategicPanelProps {
  report: string;
}

export function StrategicPanel({ report }: StrategicPanelProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-amber-500/30 bg-slate-950 p-1 shadow-2xl">
      {/* Efecto de brillo superior decorativo */}
      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
      
      <div className="bg-slate-900/50 p-6 rounded-md">
        <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500">
            <span className="text-xl font-bold">⚠️</span>
          </div>
          <div>
            <h2 className="text-sm font-black tracking-widest text-amber-500 uppercase">
              SitRep (Situation Report)
            </h2>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">
              Análisis Estratégico de Inteligencia Artificial
            </p>
          </div>
          
          <div className="ml-auto text-[10px] font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
            ID: {new Date().toISOString().split('T')[0]}-DC
          </div>
        </div>

        <div className="relative">
          {/* Texto del reporte */}
          <p className="text-sm leading-relaxed text-slate-300 font-medium selection:bg-amber-500 selection:text-black">
            {report}
          </p>
          
          {/* Marca de agua sutil */}
          <div className="absolute -bottom-2 -right-2 opacity-[0.03] pointer-events-none select-none">
            <h3 className="text-6xl font-black">DATACORE</h3>
          </div>
        </div>
      </div>
    </div>
  );
}