import { Facebook, Instagram, Linkedin, Leaf, Twitter } from 'lucide-react';
import { footerLinks } from '../../features/landing/landingData.js';

const socials = [Instagram, Twitter, Linkedin, Facebook];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold text-slate-950 dark:text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <Leaf size={18} />
            </span>
            EcoStay AI
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">
            AI-powered sustainable tourism for verified stays, meaningful local experiences, and community-first journeys.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((Icon, index) => (
              <a className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300" href="/" key={index} aria-label="EcoStay AI social link">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-bold text-slate-950 dark:text-white">{group}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a className="text-sm text-slate-600 transition hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-100" href="/">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        (c) 2026 EcoStay AI. Travel intelligently, support communities, and leave places better.
      </div>
    </footer>
  );
}
