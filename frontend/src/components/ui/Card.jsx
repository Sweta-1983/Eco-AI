import { cn } from '../../utils/cn.js';

export function Card({ children, className }) {
  return (
    <section className={cn('rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900', className)}>
      {children}
    </section>
  );
}
