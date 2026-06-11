import { motion as Motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../landingData.js';
import { SectionHeader } from './SectionHeader.jsx';

export function Testimonials() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950" id="community">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Traveler stories"
          title="Built for travelers who care where their money goes"
          description="Realistic planning, verified stays, and community-first recommendations create trips that feel both effortless and meaningful."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Motion.article
              className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              key={testimonial.name}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 font-bold text-white">{testimonial.avatar}</span>
                  <div>
                    <h3 className="font-bold text-slate-950 dark:text-white">{testimonial.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-accent-500">
                  <Star fill="currentColor" size={13} />
                  {testimonial.rating}
                </span>
              </div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">"{testimonial.review}"</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
