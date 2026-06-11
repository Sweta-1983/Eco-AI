import { NavLink } from 'react-router-dom';
import { CalendarCheck, Compass, HeartHandshake, Map, ShieldCheck, UserRound, UsersRound } from 'lucide-react';
import { ROUTES } from '../../constants/routes.js';

const links = [
  { icon: Compass, label: 'Discover', to: ROUTES.DISCOVER },
  { icon: Map, label: 'Trip Planner', to: ROUTES.PLANNER },
  { icon: CalendarCheck, label: 'Bookings', to: ROUTES.BOOKINGS },
  { icon: UsersRound, label: 'Community', to: ROUTES.COMMUNITY },
  { icon: UserRound, label: 'Profile', to: ROUTES.PROFILE },
  { icon: ShieldCheck, label: 'Trust Dashboard', to: ROUTES.TRUST },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950 lg:block">
      <div className="mb-6 flex items-center gap-2 px-2 text-lg font-semibold text-slate-950 dark:text-slate-50">
        <HeartHandshake size={20} />
        EcoStay AI
      </div>
      <nav className="space-y-1">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-100' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'}`
              }
              key={link.to}
              to={link.to}
            >
              <Icon size={18} />
              {link.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
