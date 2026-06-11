import { cn } from '../../utils/cn.js';

export function Input({ className, id, label, error, ...props }) {
  return (
    <label className="block" htmlFor={id}>
      {label && <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span>}
      <input
        id={id}
        className={cn(
          'h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-brand-900',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-100',
          className,
        )}
        {...props}
      />
      {error && <span className="mt-1 block text-sm text-red-600">{error}</span>}
    </label>
  );
}
