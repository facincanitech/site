import { renderHighlighted } from "@/lib/highlight";

export default function MarketOpportunity({ market }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {market.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-ink/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="text-terracotta">{market.titleA}</span>
          <br />
          <span className="text-forest">{market.titleB}</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-ink/80 leading-relaxed">
          {renderHighlighted(market.paragraph, "text-terracotta font-semibold")}
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {market.cards.map((card) => (
            <div key={card.title} className="rounded-xl bg-cream-light/80 border border-ink/5 p-6">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-terracotta">{card.index}</span>
                <h3 className="font-bold text-ink">{card.title}</h3>
              </div>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
