const dotColors = ["bg-terracotta", "bg-ink/60", "bg-gold"];

export default function OriginSection({ a }) {
  return (
    <section className="bg-cream-light">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {a.origin.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-ink/20" />
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
          <span className="text-terracotta">{a.origin.titleWhere}</span>{" "}
          <span className="text-ink">{a.origin.titleMid}</span>
          <span className="text-forest">{a.origin.titleEnd}</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-ink/70 leading-relaxed">
          {a.origin.paragraph}
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {a.origin.cards.map((card, i) => (
            <div
              key={card.title}
              className="relative rounded-2xl border border-ink/10 bg-cream p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-label text-[11px] uppercase text-terracotta">
                  {card.index}
                </span>
                <span className="font-mono-label text-[10px] uppercase text-ink/40">
                  {card.tag}
                </span>
              </div>
              <span className="h-px w-8 bg-ink/20 mb-4" />
              <h3 className="text-xl font-bold text-deep-green mb-3">{card.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{card.text}</p>
              <span
                className={`absolute bottom-5 right-5 h-1.5 w-1.5 rounded-full ${dotColors[i % dotColors.length]}`}
              />
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl font-mono-label text-[11px] uppercase text-ink/40 leading-relaxed">
          © {a.origin.footnote}
        </p>
      </div>
    </section>
  );
}
