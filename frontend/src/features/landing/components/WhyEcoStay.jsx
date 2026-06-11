import { motion as Motion } from 'framer-motion';
import { benefits } from '../landingData.js';
import { SectionHeader } from './SectionHeader.jsx';

export function WhyEcoStay() {
  return (
    <section className="bg-slate-950 py-24 text-white" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why EcoStay AI"
          title="An intelligent travel layer for sustainable tourism"
          description="EcoStay AI combines recommendation quality, trust signals, community context, and planning intelligence so travel decisions feel confident."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Motion.article
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.1]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                key={benefit.title}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400/15 text-brand-300">
                  <Icon size={24} />
                </span>
                <h3 className="mt-6 text-lg font-bold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{benefit.text}</p>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
