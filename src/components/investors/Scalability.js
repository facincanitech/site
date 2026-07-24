import { renderHighlighted } from "@/lib/highlight";

export default function Scalability({ scalability }) {
  return (
    <section className="bg-cream-light">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {scalability.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-ink/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="text-forest">{scalability.titleA} </span>
          <span className="text-terracotta">{scalability.titleB}</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-ink/80 leading-relaxed">
          {renderHighlighted(scalability.paragraph, "text-forest font-semibold")}
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {scalability.items.map((item) => (
            <div key={item.title} className="rounded-xl bg-cream border border-ink/5 p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-forest text-lg leading-none">✕</span>
                <div>
                  <h3 className="font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/65 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
