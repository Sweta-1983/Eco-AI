import { motion as Motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function RecommendationCard({ recommendation, index = 0 }) {
  return (
    <Motion.article
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-none"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex gap-4 p-4">
        <img className="h-28 w-28 shrink-0 rounded-2xl object-cover" src={recommendation.image} alt={recommendation.title} />
        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-black text-brand-700 dark:bg-brand-900/40 dark:text-brand-100">
            <Sparkles size={13} />
            {recommendation.match}
          </span>
          <h3 className="mt-3 font-display text-lg font-bold text-slate-950 dark:text-white">{recommendation.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {recommendation.reasons.map((reason) => (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300" key={reason}>
                <CheckCircle2 size={12} />
                {reason}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Motion.article>
  );
}
