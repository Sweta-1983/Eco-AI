import { SlidersHorizontal, X } from 'lucide-react';
import { cn } from '../../../utils/cn.js';

const filterSections = [
  {
    title: 'Budget',
    render: ({ filters, updateFilter }) => (
      <div>
        <input
          className="w-full accent-brand-600"
          max="25000"
          min="5000"
          onChange={(event) => updateFilter('budget', Number(event.target.value))}
          step="1000"
          type="range"
          value={filters.budget}
        />
        <p className="mt-2 text-sm font-bold text-slate-700 dark:text-slate-200">Up to Rs.{filters.budget.toLocaleString('en-IN')}</p>
      </div>
    ),
  },
  {
    title: 'Travel Type',
    keyName: 'travelType',
    options: ['All', 'Adventure', 'Culture', 'Food', 'Photography', 'Workation', 'Family'],
  },
  {
    title: 'Destination',
    keyName: 'destination',
    options: ['All', 'Mussoorie', 'Rishikesh', 'Manali', 'Coorg', 'Hampi', 'Meghalaya'],
  },
  {
    title: 'Ratings',
    keyName: 'rating',
    options: [
      { label: 'Any', value: 0 },
      { label: '4.5+', value: 4.5 },
      { label: '4.8+', value: 4.8 },
    ],
  },
  {
    title: 'Eco Score',
    keyName: 'ecoScore',
    options: [
      { label: 'Any', value: 0 },
      { label: '85+', value: 85 },
      { label: '90+', value: 90 },
    ],
  },
  {
    title: 'Safety Score',
    keyName: 'safetyScore',
    options: [
      { label: 'Any', value: 0 },
      { label: '80+', value: 80 },
      { label: '88+', value: 88 },
    ],
  },
  {
    title: 'Category',
    keyName: 'category',
    options: ['All', 'Destinations', 'Stays', 'Experiences', 'Hidden Gems'],
  },
];

function OptionButton({ isActive, label, onClick }) {
  return (
    <button
      className={cn(
        'rounded-full border px-3 py-1.5 text-xs font-bold transition',
        isActive
          ? 'border-brand-600 bg-brand-50 text-brand-700 dark:border-brand-400 dark:bg-brand-900/40 dark:text-brand-100'
          : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300',
      )}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

export function FilterSidebar({ className, filters, onClose, resetFilters, updateFilter }) {
  return (
    <aside className={cn('h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900', className)}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-100">
            <SlidersHorizontal size={18} />
          </span>
          <h2 className="font-display text-lg font-bold text-slate-950 dark:text-white">Filters</h2>
        </div>
        {onClose && (
          <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" onClick={onClose} type="button" aria-label="Close filters">
            <X size={18} />
          </button>
        )}
      </div>
      <div className="space-y-3">
        {filterSections.map((section) => (
          <details className="rounded-2xl border border-slate-200 p-3 open:bg-earth-50 dark:border-slate-800 dark:open:bg-slate-950" key={section.title} open>
            <summary className="cursor-pointer text-sm font-bold text-slate-800 dark:text-slate-100">{section.title}</summary>
            <div className="mt-3">
              {section.render ? (
                section.render({ filters, updateFilter })
              ) : (
                <div className="flex flex-wrap gap-2">
                  {section.options.map((option) => {
                    const value = typeof option === 'object' ? option.value : option;
                    const label = typeof option === 'object' ? option.label : option;

                    return (
                      <OptionButton
                        isActive={filters[section.keyName] === value}
                        key={`${section.title}-${value}`}
                        label={label}
                        onClick={() => updateFilter(section.keyName, value)}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
      <button className="mt-4 h-10 w-full rounded-2xl bg-slate-950 text-sm font-bold text-white transition hover:bg-brand-700 dark:bg-brand-600" onClick={resetFilters} type="button">
        Reset Filters
      </button>
    </aside>
  );
}
