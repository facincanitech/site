export default function StatsBar({ t }) {
  return (
    <section className="bg-deep-green border-t border-black/20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.stats.map((s) => (
          <div key={s.label}>
            <p className="font-mono-label text-[11px] uppercase text-gold-light mb-1.5">
              {s.label}
            </p>
            <p className="text-cream-light font-semibold leading-snug whitespace-pre-line">
              {s.value}
            </p>
          </div>
        ))}
        <div className="lg:text-right">
          <p className="font-mono-label text-[11px] uppercase text-cream-light/50 mb-1.5">
            {t.guardian.label}
          </p>
          <p className="text-cream-light font-semibold">{t.guardian.name}</p>
        </div>
      </div>
    </section>
  );
}
