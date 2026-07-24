export default function LoreHero({ l }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(100deg, var(--color-deep-green) 0%, var(--color-deep-green-2) 55%, var(--color-forest) 80%, var(--color-gold) 150%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20">
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="font-mono-label text-xs uppercase text-gold-light">
            {l.hero.eyebrow}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight">
          <span className="text-cream-light">{l.hero.titleA} </span>
          <span className="text-gold">{l.hero.titleB}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-cream-light/85 leading-relaxed">
          {l.hero.paragraph}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          {l.hero.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono-label text-[11px] uppercase text-cream-light/60"
            >
              · {tag}
            </span>
          ))}
        </div>

        <a
          href="#collection"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 font-semibold text-deep-green hover:bg-gold-light transition-colors"
        >
          {l.hero.cta}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep-green text-gold">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
