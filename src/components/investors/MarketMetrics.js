export default function MarketMetrics({ market }) {
  const max = Math.max(...market.revenue.map((r) => r.value));

  return (
    <section className="bg-deep-green-2">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {market.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-cream-light/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-cream-light">
          {market.title}
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-cream-light/75 leading-relaxed">
          {market.paragraph}
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {market.tam.map((t) => (
            <div key={t.label} className="rounded-xl border border-cream-light/10 bg-cream-light/5 p-6">
              <p className="text-4xl font-bold text-gold">{t.value}</p>
              <p className="mt-2 font-mono-label text-[11px] uppercase text-cream-light/60">
                {t.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-[1.6fr_1fr] gap-5">
          <div className="rounded-xl border border-cream-light/10 bg-cream-light/5 p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-cream-light">{market.revenueTitle}</h3>
              <span className="font-mono-label text-[10px] uppercase text-cream-light/40">
                {market.revenueNote}
              </span>
            </div>

            <div className="flex items-end gap-4 md:gap-6 h-52">
              {market.revenue.map((r) => (
                <div key={r.year} className="flex-1 flex flex-col items-center justify-end h-full">
                  <span className="mb-2 font-mono-label text-xs text-gold-light">
                    ${r.value}M
                  </span>
                  <div
                    className="w-full max-w-10 rounded-t-md bg-gold"
                    style={{ height: `${Math.max((r.value / max) * 100, 4)}%` }}
                  />
                  <span className="mt-3 font-mono-label text-[10px] uppercase text-cream-light/50">
                    {r.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-gold p-6 md:p-8 flex flex-col justify-center">
            <p className="font-mono-label text-[11px] uppercase text-deep-green/70 mb-2">
              {market.ebitda.label}
            </p>
            <p className="text-4xl font-bold text-deep-green">{market.ebitda.value}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
