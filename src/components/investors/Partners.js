export default function Partners({ partners }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-terracotta" />
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {partners.eyebrow}
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="text-terracotta">{partners.titleA}</span>
          <br />
          <span className="text-ink">{partners.titleB}</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-ink/75 leading-relaxed">
          {partners.paragraph}
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {partners.columns.map((col) => (
            <div key={col.title} className="rounded-xl bg-cream-light border border-ink/5 p-5">
              <p className="font-mono-label text-[10px] uppercase text-terracotta mb-2">
                · {col.title}
              </p>
              <p className="text-sm text-ink/65 leading-relaxed">{col.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
