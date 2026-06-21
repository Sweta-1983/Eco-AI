import { SendHorizonal, Sparkles } from 'lucide-react';

const suggestions = ['Adventure', 'Culture', 'Food', 'Photography', 'Workation', 'Family'];

export function SearchBar({ onChange, value }) {
  return (
    <div className="rounded-3xl border border-white/60 bg-white/95 p-3 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-950/90">
      <div className="flex flex-col gap-3 md:flex-row">
        <label className="flex min-h-16 flex-1 items-center gap-3 rounded-2xl bg-earth-50 px-4 dark:bg-slate-900" htmlFor="discover-search">
          <Sparkles className="shrink-0 text-brand-600" size={20} />
          <input
            id="discover-search"
            className="h-12 min-w-0 flex-1 bg-transparent text-sm font-semibold text-slate-950 outline-none placeholder:text-slate-400 dark:text-white"
            onChange={(event) => onChange(event.target.value)}
            placeholder="Plan a 4-day family trip to Mussoorie under Rs.15,000"
            type="search"
            value={value}
          />
        </label>
        <button className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-700" type="button">
          Explore
          <SendHorizonal size={17} />
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            key={suggestion}
            onClick={() => onChange(suggestion)}
            type="button"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
