import { motion as Motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes.js';
import { HeroDashboard } from './HeroDashboard.jsx';

export function LandingHero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-earth-50 pt-16 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(46,125,50,0.12),transparent_35%,rgba(255,183,77,0.18))]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm backdrop-blur dark:border-brand-900 dark:bg-slate-900/70 dark:text-brand-100">
            <Sparkles size={16} />
            AI-powered sustainable tourism
          </span>
          <h1 className="mt-7 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            Explore Sustainably.
            <span className="block text-brand-600">Travel Intelligently.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Discover verified homestays, authentic local experiences, hidden gems, and personalized AI-powered travel plans.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700" to={ROUTES.DISCOVER}>
              Start Exploring
              <ArrowRight size={18} />
            </Link>
            <a className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white" href="#ai-search">
              Plan My Trip
            </a>
          </div>
        </Motion.div>
        <HeroDashboard />
      </div>
    </section>
  );
}
