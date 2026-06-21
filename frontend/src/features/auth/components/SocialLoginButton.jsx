import { motion as Motion } from 'framer-motion';

export function SocialLoginButton({ children = 'Continue with Google', onClick }) {
  return (
    <Motion.button
      className="flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/90 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-950 dark:text-white"
      onClick={onClick}
      type="button"
      whileTap={{ scale: 0.98 }}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white font-display text-base font-bold text-brand-600 shadow-sm">G</span>
      {children}
    </Motion.button>
  );
}
