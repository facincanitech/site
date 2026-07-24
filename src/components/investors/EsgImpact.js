import { renderHighlighted } from "@/lib/highlight";

const colorMap = {
  green: { border: "border-t-forest", text: "text-forest" },
  terracotta: { border: "border-t-terracotta", text: "text-terracotta" },
  gold: { border: "border-t-gold", text: "text-gold" },
};

export default function EsgImpact({ esg }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {esg.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-ink/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="text-ink">{esg.titleA} </span>
          <span className="text-forest">{esg.titleB}</span>{" "}
          <span className="text-terracotta">{esg.titleC}</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-ink/80 leading-relaxed">
          {renderHighlighted(esg.paragraph, "text-forest font-semibold")}
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {esg.columns.map((col) => {
            const c = colorMap[col.color];
            return (
              <div
                key={col.title}
                className={`rounded-xl border border-ink/10 border-t-4 ${c.border} bg-deep-green p-6`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-3xl font-bold ${c.text}`}>{col.letter}</span>
                  <h3 className="font-bold text-cream-light">{col.title}</h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-cream-light/70 leading-relaxed">
                      <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${c.text.replace("text-", "bg-")}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/10 px-5 py-4 max-w-4xl">
          <span className="text-terracotta">↗</span>
          <p className="text-sm text-ink/70 leading-relaxed">
            {renderHighlighted(esg.note, "text-ink font-semibold")}
          </p>
        </div>
      </div>
    </section>
  );
}
