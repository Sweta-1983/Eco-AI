import { Binoculars, Grid2X2, Home, Sparkles } from 'lucide-react';
import { cn } from '../../../utils/cn.js';

const tabs = [
  { icon: Grid2X2, label: 'All' },
  { icon: Home, label: 'Stays' },
  { icon: Sparkles, label: 'Experiences' },
  { icon: Binoculars, label: 'Hidden Gems' },
];

export function CategoryTabs({ activeTab, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.label;

        return (
          <button
            className={cn(
              'inline-flex h-10 shrink-0 items-center gap-2 rounded-xl px-4 text-sm font-bold transition',
              isActive
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                : 'text-slate-600 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
            )}
            key={tab.label}
            onClick={() => onChange(tab.label)}
            type="button"
          >
            <Icon size={17} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
