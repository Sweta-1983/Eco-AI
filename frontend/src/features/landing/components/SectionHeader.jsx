import { motion as Motion } from 'framer-motion';

export function SectionHeader({ eyebrow, title, description }) {
  return (
    <Motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>}
    </Motion.div>
  );
}
