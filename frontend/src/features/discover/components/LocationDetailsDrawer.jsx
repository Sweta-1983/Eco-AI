import { motion as Motion } from 'framer-motion';
import { Bookmark, CalendarCheck, Leaf, ShieldCheck, Star, UsersRound, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button } from '../../../components/ui/Button.jsx';

export function LocationDetailsDrawer({ location, onClose }) {
  if (!location) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] bg-slate-950/45 backdrop-blur-sm">
      <button className="absolute inset-0 h-full w-full cursor-default" onClick={onClose} type="button" aria-label="Close location details" />
      <Motion.aside
        className="absolute bottom-0 right-0 flex max-h-[88vh] w-full flex-col overflow-hidden rounded-t-[2rem] bg-white shadow-2xl dark:bg-slate-950 md:bottom-4 md:right-4 md:top-4 md:max-h-none md:max-w-md md:rounded-[2rem]"
        initial={{ opacity: 0, x: 40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ type: 'spring', damping: 28, stiffness: 240 }}
      >
        <div className="relative h-56 shrink-0 overflow-hidden">
          <img className="h-full w-full object-cover" src={location.image} alt={location.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 backdrop-blur" onClick={onClose} type="button" aria-label="Close details">
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{location.category}</p>
            <h2 className="font-display text-2xl font-bold">{location.name}</h2>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-5">
          <div className="grid grid-cols-4 gap-2 text-center">
            <span className="rounded-2xl bg-accent-50 p-3 text-xs font-bold text-slate-800">
              <Star className="mx-auto mb-1" fill="currentColor" size={16} />
              {location.rating}
            </span>
            <span className="rounded-2xl bg-brand-50 p-3 text-xs font-bold text-brand-700 dark:bg-brand-900/40 dark:text-brand-100">
              <Leaf className="mx-auto mb-1" size={16} />
              {location.ecoScore}
            </span>
            <span className="rounded-2xl bg-slate-100 p-3 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <ShieldCheck className="mx-auto mb-1" size={16} />
              {location.safetyScore}
            </span>
            <span className="rounded-2xl bg-slate-100 p-3 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <UsersRound className="mx-auto mb-1" size={16} />
              {location.communityScore}
            </span>
          </div>
          <div className="mt-5 rounded-3xl bg-earth-50 p-4 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">Gallery</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[location.image, location.image, location.image].map((image, index) => (
                <img className="h-20 rounded-2xl object-cover" src={image} alt={`${location.name} gallery ${index + 1}`} key={`${location.id}-${index}`} />
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{location.description}</p>
          <div className="mt-5 flex items-end justify-between gap-4 rounded-3xl border border-slate-200 p-4 dark:border-slate-800">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Starting price</p>
              <p className="mt-1 text-2xl font-black text-slate-950 dark:text-white">Rs.{location.price.toLocaleString('en-IN')}</p>
            </div>
            <p className="text-right text-xs font-bold text-slate-500">{location.destination}</p>
          </div>
          <div className="mt-5">
            <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">Facilities</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {location.facilities.map((facility) => (
                <span className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700 dark:bg-brand-900/40 dark:text-brand-100" key={facility}>
                  {facility}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-3 border-t border-slate-200 p-4 dark:border-slate-800">
          <Button className="h-11 rounded-2xl" onClick={() => toast.success('Booking flow will be added in a later phase')}>
            <CalendarCheck size={17} />
            Book Now
          </Button>
          <Button aria-label="Save location" className="h-11 w-11 rounded-2xl px-0" onClick={() => toast.success('Saved to your trip ideas')} variant="secondary">
            <Bookmark size={17} />
          </Button>
        </div>
      </Motion.aside>
    </div>
  );
}
