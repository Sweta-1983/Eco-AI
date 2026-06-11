import { motion as Motion } from 'framer-motion';
import { Bot, Leaf, MapPinned, Route, Star } from 'lucide-react';
import { heroMetrics } from '../landingData.js';

export function HeroDashboard() {
  return (
    <Motion.div
      className="relative mx-auto max-w-xl"
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="absolute -left-5 top-16 hidden rounded-2xl border border-white/70 bg-white/80 p-4 shadow-2xl backdrop-blur-xl sm:block">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-700">
            <Bot size={20} />
          </span>
          <div>
            <p className="text-xs font-semibold text-slate-500">AI match</p>
            <p className="text-sm font-bold text-slate-950">Coorg farm stay</p>
          </div>
        </div>
      </div>
      <Motion.div
        className="absolute -right-4 bottom-16 z-10 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-2xl backdrop-blur-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
          <Leaf className="text-brand-600" size={18} />
          38% lower footprint
        </div>
      </Motion.div>
      <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/70">
        <div className="border-b border-slate-200/80 bg-slate-950 px-5 py-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/60">EcoStay AI Planner</p>
              <p className="font-semibold">Mussoorie family escape</p>
            </div>
            <span className="rounded-full bg-brand-400/20 px-3 py-1 text-xs font-semibold text-brand-100">Live AI draft</span>
          </div>
        </div>
        <div className="grid gap-4 p-5">
          <div className="grid grid-cols-3 gap-3">
            {heroMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div className="rounded-2xl bg-earth-50 p-3 dark:bg-slate-800" key={metric.label}>
                  <Icon className="mb-3 text-brand-600" size={18} />
                  <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{metric.label}</p>
                  <p className="mt-1 text-sm font-bold text-slate-950 dark:text-white">{metric.value}</p>
                </div>
              );
            })}
          </div>
          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl bg-slate-950 p-4 text-white">
              <div className="mb-3 flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <MapPinned size={17} />
                  Map preview
                </span>
                <span className="text-xs text-white/50">4 days</span>
              </div>
              <div className="relative h-44 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_25%_30%,#66BB6A_0_8%,transparent_9%),radial-gradient(circle_at_70%_58%,#FFB74D_0_7%,transparent_8%),linear-gradient(135deg,#1f3d24,#426b46_45%,#c8d9b8)]">
                <div className="absolute left-8 top-10 h-20 w-32 rounded-full border-2 border-white/35" />
                <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border-2 border-white/30" />
                <div className="absolute left-10 top-12 h-3 w-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.25)]" />
                <div className="absolute bottom-12 right-12 h-3 w-3 rounded-full bg-accent-400 shadow-[0_0_0_6px_rgba(255,183,77,0.25)]" />
              </div>
            </div>
            <div className="space-y-3">
              {['Forest ridge homestay', 'Landour food walk', 'Sunset village trail'].map((item, index) => (
                <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800" key={item}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">{item}</p>
                    <span className="flex items-center gap-1 text-xs font-bold text-accent-500">
                      <Star fill="currentColor" size={13} />
                      {4.9 - index / 10}
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-slate-100 dark:bg-slate-700">
                    <div className="h-full rounded-full bg-brand-500" style={{ width: `${88 - index * 10}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-brand-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <Route size={20} />
              <p className="text-sm font-semibold">AI planner optimized this trip for budget, weather, crowd levels, and verified hosts.</p>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}
