import { motion as Motion } from 'framer-motion';
import { experiences } from '../landingData.js';
import { SectionHeader } from './SectionHeader.jsx';

const gradients = [
  'from-brand-600 to-emerald-400',
  'from-accent-400 to-orange-500',
  'from-sky-500 to-brand-400',
  'from-rose-500 to-accent-400',
  'from-indigo-500 to-sky-400',
  'from-lime-500 to-brand-600',
];

export function FeaturedExperiences() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950" id="experiences">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured experiences"
          title="Local experiences with real context"
          description="From food trails to farm stays, each experience is designed to feel personal, respectful, and rooted in the destination."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <Motion.article
                className={`rounded-3xl bg-gradient-to-br ${gradients[index]} p-6 text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                key={experience.title}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <Icon size={24} />
                </span>
                <h3 className="mt-8 font-display text-2xl font-bold">{experience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/90">{experience.text}</p>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
