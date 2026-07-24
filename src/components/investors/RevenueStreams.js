import { renderHighlighted } from "@/lib/highlight";

export default function RevenueStreams({ revenue }) {
  return (
    <section className="bg-deep-green-2">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {revenue.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-cream-light/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="text-gold">{revenue.titleA}</span>
          <br />
          <span className="text-cream-light">{revenue.titleB}</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-cream-light/80 leading-relaxed">
          {renderHighlighted(revenue.paragraph, "text-gold font-semibold")}
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {revenue.streams.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-cream-light/10 bg-cream-light/5 p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-label text-xs text-terracotta">{s.index}</span>
                <span className="font-mono-label text-[10px] uppercase text-cream-light/40">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-bold text-cream-light">{s.title}</h3>
              <p className="mt-2 text-sm text-cream-light/60 leading-relaxed">{s.text}</p>
            </div>
          ))}

          <div className="rounded-xl bg-gold p-6">
            <p className="font-mono-label text-[10px] uppercase text-deep-green/70 mb-2">
              {revenue.synthesis.label}
            </p>
            <h3 className="text-xl font-bold text-deep-green leading-snug">
              {revenue.synthesis.title}
            </h3>
            <p className="mt-2 text-sm text-deep-green/80 leading-relaxed">
              {revenue.synthesis.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
