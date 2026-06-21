import { Leaf, RotateCcw, SearchX } from 'lucide-react';

export function EmptyState({ onReset }) {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-900">
      <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-100">
        <SearchX size={34} />
        <Leaf className="absolute -right-2 -top-2 rounded-full bg-accent-400 p-1 text-slate-950" size={24} />
      </div>
      <h2 className="font-display text-2xl font-bold text-slate-950 dark:text-white">No destinations found</h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">Try a broader search, lower the score filters, or reset everything to see the full collection.</p>
      <button className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-brand-600 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-700" onClick={onReset} type="button">
        <RotateCcw size={16} />
        Reset Filters
      </button>
    </div>
  );
}
