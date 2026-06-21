import { motion as Motion } from 'framer-motion';
import { BadgeCheck, HeartHandshake, Leaf, Star } from 'lucide-react';

export function StayCard({ stay, index = 0 }) {
  return (
    <Motion.article
      className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 dark:bg-slate-900 dark:ring-slate-800 dark:hover:shadow-none"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={stay.image} alt={stay.name} />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-700 backdrop-blur">
          <BadgeCheck size={13} />
          Verified
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{stay.name}</h3>
            <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{stay.destination}</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-2.5 py-1 text-xs font-bold text-slate-800">
            <Star fill="currentColor" size={13} />
            {stay.rating}
          </span>
        </div>
        <p className="mt-4 text-xl font-black text-slate-950 dark:text-white">Rs.{stay.price.toLocaleString('en-IN')} <span className="text-xs font-semibold text-slate-500">/ night</span></p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <span className="inline-flex items-center gap-1 rounded-2xl bg-brand-50 px-3 py-2 text-xs font-bold text-brand-700 dark:bg-brand-900/40 dark:text-brand-100">
            <Leaf size={14} />
            Eco {stay.ecoScore}
          </span>
          <span className="inline-flex items-center gap-1 rounded-2xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <HeartHandshake size={14} />
            Impact {stay.communityScore}
          </span>
        </div>
      </div>
    </Motion.article>
  );
}
