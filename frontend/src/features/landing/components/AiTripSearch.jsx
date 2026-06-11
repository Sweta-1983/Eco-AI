import { motion as Motion } from 'framer-motion';
import { SendHorizonal, Sparkles } from 'lucide-react';
import { suggestions } from '../landingData.js';

export function AiTripSearch() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950" id="ai-search">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Motion.div
          className="rounded-[2rem] border border-slate-200 bg-earth-50 p-6 shadow-xl shadow-slate-200/50 sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white">
              <Sparkles size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">AI trip search</p>
              <h2 className="font-display text-3xl font-bold text-slate-950 dark:text-white">Tell us your dream trip.</h2>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-950 sm:flex-row">
            <textarea
              className="min-h-28 flex-1 resize-none rounded-2xl border-0 bg-transparent p-4 text-base text-slate-950 outline-none placeholder:text-slate-400 dark:text-white"
              placeholder="Plan a 4-day family trip to Mussoorie under Rs.15,000"
            />
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-700">
              Generate
              <SendHorizonal size={17} />
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {suggestions.map((suggestion) => (
              <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-md dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" key={suggestion}>
                {suggestion}
              </button>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
