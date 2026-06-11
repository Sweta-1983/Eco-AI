import { LoaderCircle } from 'lucide-react';
import { cn } from '../../utils/cn.js';

export function Loader({ className, fullScreen = false, label = 'Loading' }) {
  return (
    <div className={cn('flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-300', fullScreen && 'min-h-screen', className)}>
      <LoaderCircle className="animate-spin" size={18} />
      <span>{label}</span>
    </div>
  );
}
