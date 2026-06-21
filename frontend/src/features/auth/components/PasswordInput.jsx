import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '../../../utils/cn.js';

export function PasswordInput({ error, id, label, registration, ...props }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <label className="block" htmlFor={id}>
      {label && <span className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</span>}
      <div className="relative">
        <input
          id={id}
          type={isVisible ? 'text' : 'password'}
          className={cn(
            'h-12 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 pr-12 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-brand-900/40',
            error && 'border-red-400 focus:border-red-500 focus:ring-red-100',
          )}
          {...registration}
          {...props}
        />
        <button
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
          onClick={() => setIsVisible((current) => !current)}
          type="button"
        >
          {isVisible ? <EyeOff size={17} /> : <Eye size={17} />}
        </button>
      </div>
      {error && <span className="mt-1.5 block text-sm font-medium text-red-600">{error}</span>}
    </label>
  );
}
