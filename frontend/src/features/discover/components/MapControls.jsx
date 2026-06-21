import { LocateFixed, Minus, Plus } from 'lucide-react';
import { useMap } from 'react-leaflet';

const indiaCenter = [22.9734, 78.6569];

export function MapControls() {
  const map = useMap();

  return (
    <div className="absolute right-4 top-20 z-[500] flex flex-col gap-2">
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg transition hover:-translate-y-0.5 dark:bg-slate-900 dark:text-white" onClick={() => map.zoomIn()} type="button" aria-label="Zoom in">
        <Plus size={18} />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg transition hover:-translate-y-0.5 dark:bg-slate-900 dark:text-white" onClick={() => map.zoomOut()} type="button" aria-label="Zoom out">
        <Minus size={18} />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg transition hover:-translate-y-0.5 dark:bg-slate-900 dark:text-white" onClick={() => map.flyTo(indiaCenter, 5)} type="button" aria-label="Reset map to India">
        <LocateFixed size={18} />
      </button>
    </div>
  );
}
