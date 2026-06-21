import { useState } from 'react';
import { ChevronDown, MapPinned } from 'lucide-react';
import { markerStyles } from '../data/mapCategories.js';

export function MapLegend() {
  const [isOpen, setIsOpen] = useState(true);
  const entries = Object.entries(markerStyles);

  return (
    <div className="absolute bottom-4 left-4 z-[500] max-w-[calc(100%-2rem)] rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/95">
      <button className="flex w-full items-center justify-between gap-4 text-sm font-bold text-slate-800 dark:text-white" onClick={() => setIsOpen((current) => !current)} type="button">
        <span className="inline-flex items-center gap-2">
          <MapPinned size={16} />
          Legend
        </span>
        <ChevronDown className={isOpen ? 'rotate-180 transition' : 'transition'} size={16} />
      </button>
      {isOpen && (
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {entries.map(([category, style]) => (
            <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300" key={category}>
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: style.color }} />
              {style.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
