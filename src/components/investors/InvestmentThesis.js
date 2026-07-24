const colorMap = {
  gold: "#c98500",
  teal: "#199e70",
  terracotta: "#d95926",
  blue: "#3987e5",
  magenta: "#d55181",
};

export default function InvestmentThesis({ thesis }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {thesis.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-ink/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink">
          {thesis.title}
        </h2>

        <div className="mt-8 inline-flex items-baseline gap-4 rounded-xl bg-deep-green px-6 py-5">
          <span className="font-mono-label text-xs uppercase text-gold-light">
            {thesis.ask.label}
          </span>
          <span className="text-4xl font-bold text-gold">{thesis.ask.value}</span>
          <span className="font-mono-label text-xs uppercase text-cream-light/60">
            {thesis.ask.sub}
          </span>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <div>
            <h3 className="font-bold text-ink mb-5">{thesis.allocationTitle}</h3>

            <div className="flex h-4 w-full overflow-hidden rounded-full gap-0.5 bg-ink/5">
              {thesis.allocation.map((a) => (
                <div
                  key={a.label}
                  style={{ width: `${a.value}%`, backgroundColor: colorMap[a.color] }}
                  title={`${a.label} — ${a.value}%`}
                />
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {thesis.allocation.map((a) => (
                <li key={a.label} className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 shrink-0 rounded-sm"
                    style={{ backgroundColor: colorMap[a.color] }}
                  />
                  <span className="text-sm text-ink/75 flex-1">{a.label}</span>
                  <span className="font-mono-label text-sm font-bold text-ink">
                    {a.value}%
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-ink mb-5">{thesis.tractionTitle}</h3>
            <ul className="space-y-3">
              {thesis.traction.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 rounded-xl border border-ink/10 bg-cream-light p-4"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  <span className="text-sm text-ink/70 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
