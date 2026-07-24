const romanColors = ["text-terracotta", "text-gold", "text-cream-light", "text-gold-light"];

export default function MissionSection({ a }) {
  return (
    <section className="bg-deep-green-2">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono-label text-xs uppercase text-gold-light">
            {a.mission.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-cream-light/20" />
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight text-gold">
          {a.mission.title1}
          <br />
          {a.mission.title2}
        </h2>

        <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <div>
            <p className="text-lg text-cream-light/85 leading-relaxed">
              {a.mission.paragraph1}
            </p>
            <p className="mt-5 text-lg text-cream-light/60 leading-relaxed">
              {a.mission.paragraph2}
            </p>

            <div className="mt-10 flex items-center gap-10">
              <div>
                <p className="text-4xl font-bold text-gold">{a.mission.stat1.value}</p>
                <p className="mt-1 font-mono-label text-[11px] uppercase text-cream-light/50">
                  {a.mission.stat1.label}
                </p>
              </div>
              <span className="h-10 w-px bg-cream-light/15" />
              <div>
                <p className="text-4xl font-bold text-terracotta">{a.mission.stat2.value}</p>
                <p className="mt-1 font-mono-label text-[11px] uppercase text-cream-light/50">
                  {a.mission.stat2.label}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {a.mission.items.map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl border border-cream-light/15 bg-cream-light/5 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className={`font-mono-label text-sm font-bold ${romanColors[i % romanColors.length]}`}>
                    {item.roman}
                  </span>
                  <div>
                    <h3 className="font-semibold text-cream-light">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-cream-light/60 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
