export default function EcosystemHero({ e }) {
  return (
    <section
      className="relative overflow-hidden bg-deep-green-2"
      style={{
        backgroundImage:
          "linear-gradient(100deg, var(--color-deep-green) 0%, var(--color-deep-green-2) 55%, var(--color-forest) 78%, var(--color-gold) 145%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="font-mono-label text-xs uppercase text-gold-light">
            {e.hero.eyebrow}
          </span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight">
          <span className="text-cream-light">{e.hero.titleLine1A} </span>
          <span className="text-gold">{e.hero.titleLine1B}</span>
          <br />
          <span className="text-cream-light">{e.hero.titleLine2}</span>
          <br />
          <span className="text-cream-light">{e.hero.titleLine3}</span>
        </h1>

        <div className="mt-10 grid lg:grid-cols-[1.3fr_0.7fr] gap-12">
          <p className="max-w-2xl text-lg text-cream-light/85 leading-relaxed">
            {e.hero.paragraph}
          </p>
          <ul className="space-y-3">
            {e.hero.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="font-mono-label text-xs uppercase text-cream-light/80">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {e.arms.map((arm) => (
            <a
              key={arm.index}
              href={`#arm-${arm.index}`}
              className="group rounded-xl border border-cream-light/15 bg-cream-light/5 p-4 hover:bg-cream-light/10 transition-colors"
            >
              <span className="font-mono-label text-[11px] text-gold-light">
                {arm.index}
              </span>
              <p className="mt-2 text-sm font-semibold text-cream-light leading-snug">
                {arm.eyebrow.split(" · ")[1]}
              </p>
              <span className="mt-3 block text-cream-light/40 group-hover:text-gold transition-colors">
                ↓
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
