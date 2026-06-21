import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, ChevronDown, Leaf, LogOut, Menu, Moon, Plane, Settings, Sun, UserRound, X } from 'lucide-react';
import { ROUTES } from '../../constants/routes.js';
import { useTheme } from '../../app/providers/themeContext.js';
import { useAuth } from '../../features/auth/hooks/useAuth.js';
import { Button } from '../ui/Button.jsx';

const publicLinks = [
  { label: 'Discover', to: '#discover' },
  { label: 'Experiences', to: '#experiences' },
  { label: 'Hidden Gems', to: '#discover' },
  { label: 'Community', to: '#community' },
  { label: 'About', to: '#about' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { currentUser, isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const initials = currentUser?.name
    ?.split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'U';

  const accountLinks = [
    { icon: UserRound, label: 'Profile', to: ROUTES.PROFILE },
    { icon: CalendarCheck, label: 'My Bookings', to: ROUTES.BOOKINGS },
  ];

  const handleLogout = () => {
    setIsAccountOpen(false);
    setIsOpen(false);
    logout();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/75 shadow-sm shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75 dark:shadow-none">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2 text-lg font-bold text-slate-950 dark:text-white" to={ROUTES.HOME}>
          <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
            <Leaf size={18} />
            <Plane className="absolute -right-1 -top-1 rounded-full bg-accent-400 p-0.5 text-slate-950" size={16} />
          </span>
          <span>EcoStay AI</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {publicLinks.map((link) => (
            <a
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              key={link.to}
              href={link.to}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <Button aria-label="Toggle theme" className="h-9 w-9 px-0" onClick={toggleTheme} variant="ghost">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          {isAuthenticated ? (
            <div className="relative">
              <button
                aria-expanded={isAccountOpen}
                aria-haspopup="menu"
                className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-1.5 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                onClick={() => setIsAccountOpen((current) => !current)}
                type="button"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-xs font-black text-white">{initials}</span>
                <span className="max-w-32 truncate">{currentUser?.name || 'Traveler'}</span>
                <ChevronDown size={16} />
              </button>
              {isAccountOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/70 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none" role="menu">
                  {accountLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <Link
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                        key={link.label}
                        onClick={() => setIsAccountOpen(false)}
                        role="menuitem"
                        to={link.to}
                      >
                        <Icon size={17} />
                        {link.label}
                      </Link>
                    );
                  })}
                  <button
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-slate-500 transition hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-white/10"
                    role="menuitem"
                    type="button"
                  >
                    <Settings size={17} />
                    Settings
                  </button>
                  <button
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-950/30"
                    onClick={handleLogout}
                    role="menuitem"
                    type="button"
                  >
                    <LogOut size={17} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link className="rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10" to={ROUTES.LOGIN}>
                Login
              </Link>
              <Link className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-brand-700 dark:bg-white dark:text-slate-950" to={ROUTES.REGISTER}>
                Sign Up
              </Link>
            </>
          )}
        </div>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-white" onClick={() => setIsOpen((current) => !current)} aria-label="Toggle navigation">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {publicLinks.map((link) => (
              <a className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-white/10" href={link.to} key={link.label} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            {isAuthenticated ? (
              <div className="mt-2 rounded-2xl border border-slate-200 p-2 dark:border-slate-700">
                <div className="mb-2 flex items-center gap-3 px-2 py-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-xs font-black text-white">{initials}</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">{currentUser?.name || 'Traveler'}</span>
                </div>
                {accountLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-white/10" key={link.label} onClick={() => setIsOpen(false)} to={link.to}>
                      <Icon size={17} />
                      {link.label}
                    </Link>
                  );
                })}
                <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-white/10" type="button">
                  <Settings size={17} />
                  Settings
                </button>
                <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-red-600 hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-950/30" onClick={handleLogout} type="button">
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link className="rounded-full border border-slate-200 px-4 py-2.5 text-center text-sm font-bold text-slate-700 dark:border-slate-700 dark:text-slate-200" onClick={() => setIsOpen(false)} to={ROUTES.LOGIN}>
                  Login
                </Link>
                <Link className="rounded-full bg-brand-600 px-4 py-2.5 text-center text-sm font-bold text-white" onClick={() => setIsOpen(false)} to={ROUTES.REGISTER}>
                  Sign Up
                </Link>
              </div>
            )}
            <Button className="mt-2 w-full" onClick={toggleTheme} variant="secondary">
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
