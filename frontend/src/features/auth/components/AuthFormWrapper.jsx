import { motion as Motion } from 'framer-motion';
import { AuthIllustration } from './AuthIllustration.jsx';

export function AuthFormWrapper({ children }) {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-earth-50 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(46,125,50,0.12),transparent_38%,rgba(255,183,77,0.16))]" />
      <Motion.div
        className="absolute left-4 top-24 h-24 w-24 rounded-full bg-brand-400/15 blur-2xl"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Motion.div
        className="absolute bottom-16 right-8 h-32 w-32 rounded-full bg-accent-400/20 blur-2xl"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl overflow-hidden lg:grid-cols-[1.02fr_0.98fr] lg:rounded-[2rem] lg:py-8">
        <AuthIllustration />
        <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:bg-white/45 lg:px-12 lg:backdrop-blur-xl dark:lg:bg-slate-950/45">
          <Motion.div
            className="w-full max-w-lg rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur-2xl sm:p-8 dark:border-white/10 dark:bg-slate-900/75 dark:shadow-none"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            {children}
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
