import { motion as Motion } from 'framer-motion';
import { impactStats } from '../landingData.js';
import { SectionHeader } from './SectionHeader.jsx';

export function ImpactSection() {
  return (
    <section className="bg-earth-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Community impact"
          title="Travel That Creates Real Impact"
          description="EcoStay AI makes impact visible, so travelers can support local businesses, entrepreneurs, artisans, and community-driven tourism."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <Motion.article
              className="rounded-3xl border border-brand-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              key={stat.label}
            >
              <p className="font-display text-5xl font-extrabold text-brand-600">{stat.value}</p>
              <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">{stat.label}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
