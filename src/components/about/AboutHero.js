export default function AboutHero({ a }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(100deg, var(--color-gold) -10%, var(--color-deep-green-2) 45%, var(--color-deep-green) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="font-mono-label text-xs uppercase text-gold-light">
            {a.hero.eyebrow}
          </span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight">
          <span className="text-gold">{a.hero.titleHighlight}</span>
          <span className="text-cream-light">{a.hero.titleRest}</span>
        </h1>

        <div className="mt-12 grid lg:grid-cols-[1.3fr_0.7fr] gap-12">
          <p className="max-w-2xl text-lg text-cream-light/85 leading-relaxed">
            {a.hero.paragraph}
          </p>
          <ul className="space-y-3">
            {a.hero.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="font-mono-label text-xs uppercase text-cream-light/80">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
