import { motion as Motion } from 'framer-motion';
import { Clock3, IndianRupee, Star } from 'lucide-react';

export function ExperienceCard({ experience, index = 0 }) {
  return (
    <Motion.article
      className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 dark:bg-slate-900 dark:ring-slate-800 dark:hover:shadow-none"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative h-44 overflow-hidden">
        <img className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={experience.image} alt={experience.title} />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-700 backdrop-blur">{experience.type}</span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{experience.title}</h3>
        <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{experience.destination}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <Clock3 size={13} />
            {experience.duration}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1.5 text-brand-700 dark:bg-brand-900/40 dark:text-brand-100">
            <IndianRupee size={13} />
            {experience.price.toLocaleString('en-IN')}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-3 py-1.5 text-slate-800">
            <Star fill="currentColor" size={13} />
            {experience.rating}
          </span>
        </div>
      </div>
    </Motion.article>
  );
}
