import { Leaf } from 'lucide-react';
import { Button } from './Button.jsx';

export function EmptyState({ actionLabel, description, onAction, title = 'Nothing here yet' }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
      <Leaf className="mb-3 text-brand-600" size={32} />
      <h2 className="text-base font-semibold text-slate-950 dark:text-slate-50">{title}</h2>
      {description && <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">{description}</p>}
      {actionLabel && onAction && (
        <Button className="mt-4" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
