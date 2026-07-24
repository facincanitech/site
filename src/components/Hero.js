export default function Hero({ t }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-deep-green-2"
      style={{
        backgroundImage:
          "linear-gradient(115deg, var(--color-deep-green) 0%, var(--color-deep-green-2) 45%, var(--color-forest) 68%, var(--color-gold) 130%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="font-mono-label text-xs uppercase text-gold-light">
              {t.hero.tag}
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-cream-light leading-[0.95] tracking-tight">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2Prefix}
            <span className="text-gold">{t.hero.titleLine2Highlight}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-cream-light/85 leading-relaxed">
            {t.hero.paragraph}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#support"
              className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 font-semibold text-deep-green hover:bg-gold-light transition-colors"
            >
              {t.hero.ctaPrimary}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep-green text-gold">
                →
              </span>
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-full border border-cream-light/30 px-6 py-3.5 font-semibold text-cream-light hover:border-cream-light/60 transition-colors"
            >
              {t.hero.ctaSecondary}
              <span className="text-sm">↗</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden border border-black/40 bg-ink shadow-2xl">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 65% 30%, #ff8a3d 0%, #b23e1b 22%, #3a1a10 48%, #120a08 78%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%)",
              }}
            />
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta animate-pulse" />
              <span className="font-mono-label text-[10px] uppercase text-cream-light">
                {t.hero.liveBadge}
              </span>
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-gold/90" />
        </div>
      </div>
    </section>
  );
}
