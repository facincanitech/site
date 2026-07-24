const colorMap = {
  gold: "border-t-gold",
  terracotta: "border-t-terracotta",
  green: "border-t-forest",
};

const statusColor = {
  gold: "text-gold",
  terracotta: "text-terracotta",
  green: "text-forest",
};

export default function UpcomingSection({ l }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {l.upcoming.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-ink/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          <span className="text-forest">{l.upcoming.titleA} </span>
          <span className="text-terracotta">{l.upcoming.titleB}</span>
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-ink/70 leading-relaxed">
          {l.upcoming.paragraph}
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {l.upcoming.items.map((item) => (
            <div
              key={item.name}
              className={`rounded-xl border border-ink/10 border-t-4 ${colorMap[item.color]} bg-cream-light p-6`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-ink">{item.name}</h3>
                <span
                  className={`font-mono-label text-[10px] uppercase ${statusColor[item.color]}`}
                >
                  · {item.status}
                </span>
              </div>
              <p className="text-sm text-ink/60 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
