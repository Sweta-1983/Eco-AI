import { cn } from '../../utils/cn.js';

export function PageContainer({ children, className, subtitle, title }) {
  return (
    <main className={cn('mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8', className)}>
      {(title || subtitle) && (
        <header className="mb-6">
          {title && <h1 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">{title}</h1>}
          {subtitle && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>}
        </header>
      )}
      {children}
    </main>
  );
}
