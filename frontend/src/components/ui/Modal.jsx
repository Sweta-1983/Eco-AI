import { X } from 'lucide-react';
import { Button } from './Button.jsx';

export function Modal({ children, isOpen, onClose, title }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
      <section className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl dark:bg-slate-900" role="dialog" aria-modal="true">
        <div className="mb-4 flex items-center justify-between gap-4">
          {title && <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">{title}</h2>}
          <Button aria-label="Close modal" onClick={onClose} variant="ghost" className="h-9 w-9 px-0">
            <X size={18} />
          </Button>
        </div>
        {children}
      </section>
    </div>
  );
}
