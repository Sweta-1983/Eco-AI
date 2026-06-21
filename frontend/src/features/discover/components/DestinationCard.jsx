import { motion as Motion } from 'framer-motion';
import { Leaf, MapPin, Star } from 'lucide-react';

export function DestinationCard({ destination, index = 0 }) {
  return (
    <Motion.article
      className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/70 dark:bg-slate-900 dark:ring-slate-800 dark:hover:shadow-none"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative h-52 overflow-hidden">
        <img className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={destination.image} alt={`${destination.name} sustainable destination`} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-700 backdrop-blur">
          <Leaf size={13} />
          {destination.badge}
        </span>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl font-bold">{destination.name}</h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-sm font-bold backdrop-blur">
              <Star fill="currentColor" size={14} />
              {destination.rating}
            </span>
          </div>
          <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-white/80">
            <MapPin size={14} />
            {destination.region}
          </p>
        </div>
      </div>
      <p className="p-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{destination.description}</p>
    </Motion.article>
  );
}
