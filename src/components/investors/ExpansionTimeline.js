const colorText = {
  terracotta: "text-terracotta",
  gold: "text-gold",
  green: "text-forest",
};
const colorRing = {
  terracotta: "border-terracotta",
  gold: "border-gold",
  green: "border-forest",
};

export default function ExpansionTimeline({ expansion }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {expansion.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-ink/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="text-terracotta">{expansion.titleA} </span>
          <span className="text-ink">{expansion.titleB} </span>
          <span className="text-forest">{expansion.titleC}</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-ink/75 leading-relaxed">
          {expansion.paragraph}
        </p>

        <div className="mt-12 relative max-w-3xl">
          <div className="absolute left-[13px] top-2 bottom-2 w-px bg-ink/10" />
          <div className="space-y-8">
            {expansion.items.map((item) => (
              <div key={item.year} className="relative pl-10">
                <span
                  className={`absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-cream ${colorRing[item.color]}`}
                >
                  <span className={`h-2 w-2 rounded-full ${colorRing[item.color].replace("border-", "bg-")}`} />
                </span>
                <p className={`font-mono-label text-[11px] uppercase ${colorText[item.color]} mb-1`}>
                  {item.year} · {item.status}
                </p>
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-ink/65 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
