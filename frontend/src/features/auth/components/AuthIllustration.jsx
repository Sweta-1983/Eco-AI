import { motion as Motion } from 'framer-motion';
import { BadgeCheck, Leaf, MapPinned, Route, ShieldCheck, Sparkles } from 'lucide-react';

const floatingCards = [
  { icon: BadgeCheck, label: 'Verified homestay', value: '4.9 rated' },
  { icon: Leaf, label: 'Impact score', value: '92/100' },
  { icon: ShieldCheck, label: 'Safety check', value: 'Trusted' },
];

export function AuthIllustration() {
  return (
    <div className="relative hidden min-h-[720px] overflow-hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(46,125,50,0.75),rgba(15,23,42,0.86)_44%,rgba(255,183,77,0.5))]" />
      <div className="absolute left-10 top-24 h-48 w-48 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-accent-400/20 blur-3xl" />
      <Motion.div className="relative z-10" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
          <Sparkles size={16} />
          Smart, sustainable journeys
        </span>
        <h2 className="mt-8 max-w-lg font-display text-5xl font-extrabold leading-tight">
          Discover Hidden Gems.
          <span className="block text-brand-200">Travel Sustainably.</span>
          <span className="block text-accent-300">Experience More.</span>
        </h2>
        <p className="mt-6 max-w-md text-base leading-7 text-white/75">
          Sign in to unlock verified community stays, AI-planned routes, and impact-aware travel recommendations.
        </p>
      </Motion.div>
      <Motion.div
        className="relative z-10 rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/55">AI trip preview</p>
            <p className="mt-1 font-bold">Coorg slow travel plan</p>
          </div>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-brand-100">4 days</span>
        </div>
        <div className="relative h-52 overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_24%_30%,#66BB6A_0_8%,transparent_9%),radial-gradient(circle_at_74%_65%,#FFB74D_0_7%,transparent_8%),linear-gradient(135deg,#1b3a20,#6d8a54_50%,#d8c79c)]">
          <div className="absolute left-10 top-12 h-3 w-3 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.22)]" />
          <div className="absolute bottom-12 right-14 h-3 w-3 rounded-full bg-accent-400 shadow-[0_0_0_8px_rgba(255,183,77,0.22)]" />
          <div className="absolute left-12 top-14 h-24 w-40 rounded-full border-2 border-white/30" />
          <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full border-2 border-white/25" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {floatingCards.map((card) => {
            const Icon = card.icon;

            return (
              <div className="rounded-2xl bg-white/10 p-3" key={card.label}>
                <Icon className="mb-3 text-brand-200" size={18} />
                <p className="text-[11px] text-white/60">{card.label}</p>
                <p className="mt-1 text-sm font-bold">{card.value}</p>
              </div>
            );
          })}
        </div>
      </Motion.div>
      <Motion.div
        className="absolute right-8 top-1/2 z-10 rounded-2xl border border-white/15 bg-white/15 p-4 backdrop-blur-xl"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2 text-sm font-bold">
          <Route size={17} />
          AI route optimized
        </div>
      </Motion.div>
      <Motion.div
        className="absolute bottom-72 left-8 z-10 rounded-2xl border border-white/15 bg-white/15 p-4 backdrop-blur-xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2 text-sm font-bold">
          <MapPinned size={17} />
          Hidden gem nearby
        </div>
      </Motion.div>
    </div>
  );
}
