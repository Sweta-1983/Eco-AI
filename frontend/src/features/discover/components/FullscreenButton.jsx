import { Maximize2, Minimize2 } from 'lucide-react';

export function FullscreenButton({ isFullscreen, onToggle }) {
  return (
    <button
      className="absolute right-4 top-4 z-[500] inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-bold text-slate-800 shadow-lg transition hover:-translate-y-0.5 dark:bg-slate-900 dark:text-white"
      onClick={onToggle}
      type="button"
    >
      {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
      {isFullscreen ? 'Exit' : 'Fullscreen'}
    </button>
  );
}
