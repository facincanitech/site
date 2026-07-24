export default function EcosystemPillars({ pillars }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {pillars.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-ink/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="text-ink">{pillars.titleA} </span>
          <span className="text-forest">{pillars.titleB}</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-ink/75 leading-relaxed">
          {pillars.paragraph}
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.items.map((item) => (
            <div
              key={item.index}
              className="rounded-2xl border border-ink/10 bg-cream-light p-6 flex flex-col"
            >
              <span className="font-mono-label text-xs text-terracotta mb-4">
                {item.index}
              </span>
              <h3 className="text-lg font-bold text-deep-green leading-snug">
                {item.title}
              </h3>
              <p className="mt-1 font-mono-label text-[10px] uppercase text-ink/40">
                {item.subtitle}
              </p>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
