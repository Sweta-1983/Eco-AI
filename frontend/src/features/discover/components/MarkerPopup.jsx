import { Popup } from 'react-leaflet';
import { Bookmark, Leaf, ShieldCheck, Star, UsersRound, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button } from '../../../components/ui/Button.jsx';

export function MarkerPopup({ location, onClose, onViewDetails }) {
  return (
    <Popup minWidth={280} maxWidth={320}>
      <article className="overflow-hidden rounded-2xl bg-white text-slate-950">
        <img className="h-36 w-full object-cover" src={location.image} alt={location.name} />
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">{location.category}</p>
              <h3 className="mt-1 font-display text-lg font-bold">{location.name}</h3>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-2 py-1 text-xs font-black">
              <Star fill="currentColor" size={13} />
              {location.rating}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <span className="rounded-xl bg-brand-50 p-2 text-xs font-bold text-brand-700">
              <Leaf className="mx-auto mb-1" size={14} />
              {location.ecoScore}
            </span>
            <span className="rounded-xl bg-slate-100 p-2 text-xs font-bold text-slate-700">
              <ShieldCheck className="mx-auto mb-1" size={14} />
              {location.safetyScore}
            </span>
            <span className="rounded-xl bg-slate-100 p-2 text-xs font-bold text-slate-700">
              <UsersRound className="mx-auto mb-1" size={14} />
              {location.communityScore}
            </span>
          </div>
          <p className="mt-3 text-sm leading-5 text-slate-600">{location.description}</p>
          <div className="mt-4 grid grid-cols-[1fr_auto_auto] gap-2">
            <Button className="h-9 rounded-xl" onClick={() => onViewDetails(location)}>
              View Details
            </Button>
            <Button aria-label="Save location" className="h-9 w-9 rounded-xl px-0" onClick={() => toast.success('Saved to your trip ideas')} variant="secondary">
              <Bookmark size={15} />
            </Button>
            <Button aria-label="Close popup" className="h-9 w-9 rounded-xl px-0" onClick={onClose} variant="ghost">
              <X size={15} />
            </Button>
          </div>
        </div>
      </article>
    </Popup>
  );
}
