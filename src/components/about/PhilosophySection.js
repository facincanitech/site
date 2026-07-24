const colorMap = {
  green: { border: "border-t-forest", text: "text-forest" },
  terracotta: { border: "border-t-terracotta", text: "text-terracotta" },
  gold: { border: "border-t-gold", text: "text-gold" },
};

export default function PhilosophySection({ a }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {a.philosophy.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-ink/20" />
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95]">
          <span className="text-ink">{a.philosophy.titleA} </span>
          <span className="text-forest">{a.philosophy.titleAHighlight}</span>
          <br />
          <span className="text-ink">{a.philosophy.titleB} </span>
          <span className="text-terracotta">{a.philosophy.titleBHighlight} </span>
          <span className="text-ink">{a.philosophy.titleBEnd}</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-ink/70 leading-relaxed">
          {a.philosophy.paragraph}
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {a.philosophy.cards.map((card) => {
            const c = colorMap[card.color];
            return (
              <div
                key={card.title}
                className={`rounded-2xl border border-ink/10 border-t-4 ${c.border} bg-cream-light p-7`}
              >
                <p className={`font-mono-label text-[11px] uppercase ${c.text} mb-3`}>
                  {card.index}
                </p>
                <h3 className="text-2xl font-bold text-ink mb-3">{card.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
