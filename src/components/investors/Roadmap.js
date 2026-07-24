import { renderHighlighted } from "@/lib/highlight";

const pillClasses = {
  gold: "bg-gold text-deep-green border-gold",
  "gold-outline": "border-gold text-gold-light bg-transparent",
  terracotta: "bg-terracotta text-cream-light border-terracotta",
  "terracotta-outline": "border-terracotta text-terracotta bg-transparent",
  muted: "border-cream-light/20 text-cream-light/40 bg-transparent",
};

const dotClasses = {
  gold: "bg-gold text-deep-green",
  "gold-outline": "bg-gold/30 text-gold",
  terracotta: "bg-terracotta text-cream-light",
  "terracotta-outline": "bg-terracotta/30 text-terracotta",
  muted: "bg-cream-light/10 text-cream-light/40",
};

export default function Roadmap({ roadmap }) {
  return (
    <section className="bg-deep-green">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {roadmap.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-cream-light/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="text-gold">{roadmap.titleA}</span>
          <br />
          <span className="text-cream-light">{roadmap.titleB}</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-cream-light/80 leading-relaxed">
          {renderHighlighted(roadmap.paragraph, "text-gold font-semibold")}
        </p>

        <div className="mt-10 space-y-4">
          {roadmap.milestones.map((m) => (
            <div
              key={m.index}
              className="flex flex-wrap items-start gap-5 rounded-xl border border-cream-light/10 bg-cream-light/5 px-6 py-5"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono-label text-xs font-bold ${dotClasses[m.color]}`}
              >
                {m.index}
              </span>
              <div className="flex-1 min-w-[200px]">
                <p className="font-mono-label text-[11px] uppercase text-gold-light mb-1">
                  {m.period}
                </p>
                <h3 className="font-bold text-cream-light">{m.title}</h3>
                <p className="mt-1 text-sm text-cream-light/60 leading-relaxed max-w-2xl">
                  {m.text}
                </p>
              </div>
              <span
                className={`shrink-0 self-center rounded-full border px-3 py-1.5 font-mono-label text-[10px] uppercase ${pillClasses[m.color]}`}
              >
                {m.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
