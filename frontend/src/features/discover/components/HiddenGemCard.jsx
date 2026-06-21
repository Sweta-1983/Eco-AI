import { motion as Motion } from 'framer-motion';
import { Gem, Leaf, UsersRound } from 'lucide-react';

export function HiddenGemCard({ gem, index = 0 }) {
  return (
    <Motion.article
      className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 dark:bg-slate-900 dark:ring-slate-800 dark:hover:shadow-none"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={gem.image} alt={gem.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-700 backdrop-blur">
          <Leaf size={13} />
          Local recommendation
        </span>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-display text-xl font-bold">{gem.name}</h3>
          <p className="text-sm font-semibold text-white/75">{gem.destination}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-5 text-center">
        <div className="rounded-2xl bg-brand-50 p-3 dark:bg-brand-900/40">
          <Gem className="mx-auto mb-1 text-brand-700 dark:text-brand-100" size={16} />
          <p className="text-sm font-black text-slate-950 dark:text-white">{gem.hiddenGemScore}</p>
          <p className="text-[11px] font-bold text-slate-500">Gem score</p>
        </div>
        <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800">
          <UsersRound className="mx-auto mb-1 text-slate-600 dark:text-slate-200" size={16} />
          <p className="text-sm font-black text-slate-950 dark:text-white">{gem.crowdLevel}</p>
          <p className="text-[11px] font-bold text-slate-500">Crowd</p>
        </div>
        <div className="rounded-2xl bg-accent-50 p-3">
          <p className="text-sm font-black text-slate-950">{gem.bestSeason}</p>
          <p className="mt-1 text-[11px] font-bold text-slate-500">Best season</p>
        </div>
      </div>
    </Motion.article>
  );
}
