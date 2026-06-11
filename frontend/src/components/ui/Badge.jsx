import { cn } from '../../utils/cn.js';

export function Badge({ children, className }) {
  return (
    <span className={cn('inline-flex items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-900/40 dark:text-brand-100', className)}>
      {children}
    </span>
  );
}
