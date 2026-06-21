import { motion as Motion } from 'framer-motion';
import { Leaf, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes.js';

export function AuthHeader({ eyebrow, title, description }) {
  return (
    <Motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
      <Link className="mb-8 inline-flex items-center gap-2 text-lg font-bold text-slate-950 dark:text-white" to={ROUTES.HOME}>
        <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
          <Leaf size={18} />
          <Plane className="absolute -right-1 -top-1 rounded-full bg-accent-400 p-0.5 text-slate-950" size={16} />
        </span>
        EcoStay AI
      </Link>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>}
      <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl dark:text-white">{title}</h1>
      {description && <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>}
    </Motion.div>
  );
}
