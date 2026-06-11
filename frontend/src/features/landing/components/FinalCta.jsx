import { motion as Motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes.js';

export function FinalCta() {
  return (
    <section className="bg-earth-50 px-4 py-24 dark:bg-slate-950">
      <Motion.div
        className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl sm:p-12 lg:p-16"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Start with intention</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Ready to Travel Smarter?</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Find verified stays, build AI-powered plans, and choose experiences that support the communities you visit.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5" to={ROUTES.DISCOVER}>
              Explore Destinations
              <ArrowRight size={18} />
            </Link>
            <a className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/10" href="#ai-search">
              Plan My Trip
            </a>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
