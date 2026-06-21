import { motion as Motion } from 'framer-motion';
import { Compass, Leaf, MapPinned, Route, ShieldCheck } from 'lucide-react';
import { SearchBar } from './SearchBar.jsx';

const metrics = [
  { icon: ShieldCheck, label: 'Verified stays', value: '48' },
  { icon: Leaf, label: 'Avg eco score', value: '91' },
  { icon: Route, label: 'Curated routes', value: '120+' },
];

export function DiscoverHero({ onSearchChange, searchValue }) {
  return (
    <Motion.section
      className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-5 py-8 text-white shadow-2xl shadow-slate-200/70 sm:px-8 lg:px-10 dark:shadow-none"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(46,125,50,0.9),rgba(15,23,42,0.92)_45%,rgba(245,158,11,0.56))]" />
      <img className="absolute inset-0 h-full w-full object-cover opacity-25" src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80" alt="" />
      <Motion.div
        className="absolute right-8 top-8 hidden h-16 w-16 items-center justify-center rounded-3xl bg-white/15 backdrop-blur lg:flex"
        animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <MapPinned size={26} />
      </Motion.div>
      <Motion.div
        className="absolute bottom-10 right-36 hidden h-12 w-12 items-center justify-center rounded-2xl bg-accent-400 text-slate-950 shadow-lg lg:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Compass size={22} />
      </Motion.div>
      <div className="relative max-w-4xl">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
          <Leaf size={14} />
          Discover responsibly
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">Discover Your Next Sustainable Journey</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/82">
          Explore verified homestays, authentic experiences, and hidden gems curated for responsible travelers.
        </p>
        <div className="mt-7">
          <SearchBar onChange={onSearchChange} value={searchValue} />
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur" key={metric.label}>
                <Icon className="mb-3 text-accent-300" size={20} />
                <p className="text-2xl font-black">{metric.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/65">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Motion.section>
  );
}
