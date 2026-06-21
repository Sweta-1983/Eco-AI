export function SectionHeading({ action, description, eyebrow, title }) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>}
        <h2 className="mt-1 font-display text-2xl font-bold text-slate-950 dark:text-white">{title}</h2>
        {description && <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>}
      </div>
      {action}
    </div>
  );
}
