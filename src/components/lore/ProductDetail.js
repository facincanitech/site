import ProductBottle from "./ProductBottle";

export default function ProductDetail({ product, labels, alt }) {
  return (
    <section className={alt ? "bg-cream" : "bg-cream-light"}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-14 md:py-16">
        <div className="grid lg:grid-cols-[0.4fr_1.6fr] gap-8 lg:gap-14">
          <div className="max-w-[220px]">
            <ProductBottle name={product.name} badge={product.badge} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono-label text-[11px] uppercase text-terracotta">
                {product.category}
              </span>
              <span className="font-mono-label text-[11px] uppercase text-ink/40">
                {product.tagline}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-deep-green leading-tight">
              {product.name}
            </h2>
            <p className="mt-1.5 font-semibold text-terracotta">{product.subtitle}</p>

            <p className="mt-5 max-w-2xl text-ink/70 leading-relaxed">
              {product.paragraph}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-label text-[11px] uppercase text-ink/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-ink/10 bg-cream/70 overflow-hidden max-w-2xl">
              <p className="px-5 py-3 font-mono-label text-[11px] uppercase text-terracotta border-b border-ink/10">
                ◆ {labels.notes}
              </p>
              <div className="grid sm:grid-cols-2">
                {product.notes.map((note, i) => (
                  <div
                    key={i}
                    className={`px-5 py-4 ${i < 2 ? "border-b border-ink/10" : ""} ${
                      i % 2 === 0 ? "sm:border-r sm:border-ink/10" : ""
                    }`}
                  >
                    <p className="font-mono-label text-[10px] uppercase text-ink/40 mb-1">
                      {labels[note.label]}
                    </p>
                    <p className="text-sm font-semibold text-ink">{note.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-deep-green px-5 py-4 max-w-2xl">
              <div>
                <p className="font-mono-label text-[10px] uppercase text-gold-light">
                  {labels.artisanal}
                </p>
                <p className="text-sm font-semibold text-cream-light">
                  {labels.communities}
                </p>
              </div>
              <p className="font-mono-label text-[10px] uppercase text-cream-light/50">
                {product.batch}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#support"
                className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 font-semibold text-deep-green hover:bg-gold-light transition-colors"
              >
                {product.ctaPrimary}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep-green text-gold">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 font-semibold text-ink hover:border-ink/40 transition-colors"
              >
                {product.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
