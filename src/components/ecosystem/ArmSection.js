import ArmIcon from "./ArmIcon";

const noteToneClasses = {
  info: "border-gold/30 bg-gold/10 text-ink/70",
  warning: "border-terracotta/30 bg-terracotta/10 text-ink/70",
};

export default function ArmSection({ arm, alt }) {
  return (
    <section
      id={`arm-${arm.index}`}
      className={alt ? "bg-cream" : "bg-cream-light"}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-[0.4fr_1.6fr] gap-6 lg:gap-14 items-start">
          <div className="flex items-start gap-4">
            <ArmIcon shape={arm.shape} accent={arm.accent} />
            <div>
              <p className="font-mono-label text-[11px] uppercase text-ink/50">
                {arm.eyebrow}
              </p>
              <span className="mt-1 block h-px w-8 bg-ink/20" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-deep-green leading-tight max-w-xl">
              {arm.title}
            </h2>

            <div className="mt-8 grid md:grid-cols-[1fr_1.2fr] gap-8">
              <p className="text-ink/70 leading-relaxed max-w-sm">{arm.paragraph}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {arm.cards.map((card) => (
                  <div
                    key={card.title}
                    className="relative rounded-xl border border-ink/10 bg-cream-light/60 p-5"
                  >
                    <span className="font-mono-label text-[10px] text-ink/40">
                      {card.index}
                    </span>
                    <h3 className="mt-1.5 font-semibold text-ink">{card.title}</h3>
                    <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">
                      {card.text}
                    </p>
                    <span className="absolute top-5 right-5 h-1.5 w-1.5 rounded-full bg-ink/15" />
                  </div>
                ))}
              </div>
            </div>

            {arm.note && (
              <div
                className={`mt-6 flex items-center gap-3 rounded-xl border px-5 py-4 text-sm max-w-2xl ${
                  noteToneClasses[arm.noteTone || "info"]
                }`}
              >
                <span>{arm.noteTone === "warning" ? "⚠" : "↗"}</span>
                <span>{arm.note}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
