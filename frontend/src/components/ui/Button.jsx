import { cn } from '../../utils/cn.js';

const variants = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300 dark:text-slate-200 dark:hover:bg-slate-800',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
};

export function Button({ children, className, disabled, type = 'button', variant = 'primary', ...props }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-slate-950',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
