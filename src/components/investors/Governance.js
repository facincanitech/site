const colorText = {
  terracotta: "text-terracotta",
  gold: "text-gold-light",
  green: "text-cream-light/70",
};

export default function Governance({ governance }) {
  return (
    <section className="bg-deep-green">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {governance.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-cream-light/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-gold">
          {governance.titleA}
          <br />
          {governance.titleB}
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-cream-light/80 leading-relaxed">
          {governance.paragraph}
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {governance.bodies.map((body) => (
            <div
              key={body.title}
              className="rounded-xl border border-cream-light/10 bg-cream-light/5 p-6"
            >
              <p className={`font-mono-label text-[10px] uppercase mb-3 ${colorText[body.color]}`}>
                · {body.label}
              </p>
              <h3 className="text-xl font-bold text-cream-light">{body.title}</h3>
              <p className="mt-2 text-sm text-cream-light/65 leading-relaxed">{body.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-cream-light/10 bg-cream-light/5 p-6 md:p-8">
          <p className="font-mono-label text-[11px] uppercase text-gold-light mb-4">
            {governance.compliance.label}
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
            <ul className="space-y-2">
              {governance.compliance.leftItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-cream-light/75 leading-relaxed">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {governance.compliance.rightItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-cream-light/75 leading-relaxed">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
