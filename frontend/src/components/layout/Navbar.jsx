import { Link, NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { ROUTES } from '../../constants/routes.js';
import { useTheme } from '../../app/providers/themeContext.js';
import { Button } from '../ui/Button.jsx';

const publicLinks = [
  { label: 'Home', to: ROUTES.HOME },
  { label: 'Login', to: ROUTES.LOGIN },
  { label: 'Register', to: ROUTES.REGISTER },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-semibold text-slate-950 dark:text-slate-50" to={ROUTES.HOME}>
          EcoStay AI
        </Link>
        <div className="flex items-center gap-2">
          {publicLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'text-brand-700 dark:text-brand-100' : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'}`
              }
              key={link.to}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
          <Button aria-label="Toggle theme" className="h-9 w-9 px-0" onClick={toggleTheme} variant="ghost">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
      </nav>
    </header>
  );
}
