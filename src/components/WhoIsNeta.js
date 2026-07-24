export default function WhoIsNeta({ t }) {
  return (
    <section className="bg-cream-light">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono-label text-xs uppercase text-terracotta">
            {t.neta.index}
          </span>
          <span className="h-px flex-1 max-w-24 bg-ink/20" />
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-deep-green tracking-tight">
          {t.neta.title1}
          <span className="text-terracotta">{t.neta.title2}</span>
        </h2>

        <div className="mt-14 grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-start">
          <div>
            <p className="text-3xl sm:text-4xl font-semibold leading-tight text-ink">
              <span className="text-terracotta">{t.neta.introHighlight}</span>
              {t.neta.introRest}
              <em className="italic text-deep-green">{t.neta.introItalic}</em>
              {t.neta.introEnd}
            </p>
            <p className="mt-8 text-lg text-ink/70">{t.neta.subtext}</p>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div
              className="h-56 w-56 rounded-full shadow-xl"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 35% 30%, var(--color-gold-light), var(--color-gold) 55%, #b9821f 100%)",
              }}
            />
            <ul className="mt-6 space-y-1 text-right font-mono-label text-[11px] uppercase text-ink/50">
              {t.neta.tags.map((tag) => (
                <li key={tag} className="flex items-center justify-end gap-2">
                  <span>© {tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
