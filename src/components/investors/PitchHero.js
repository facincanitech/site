export default function PitchHero({ hero }) {
  return (
    <section
      className="relative overflow-hidden bg-ink"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 15%, rgba(233,178,60,0.16), transparent 45%), linear-gradient(160deg, #0e0e0b 0%, var(--color-ink) 45%, var(--color-deep-green) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-24 md:py-32">
        <span className="font-mono-label text-xs uppercase text-gold-light">
          {hero.eyebrow}
        </span>

        <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-cream-light">
          {hero.headline}{" "}
          <span className="text-gold">{hero.headlineHighlight}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl text-cream-light/70 leading-relaxed">
          {hero.subheadline}
        </p>

        <div className="mt-12 relative max-w-3xl aspect-video rounded-2xl overflow-hidden border border-cream-light/15 bg-black/40 flex items-center justify-center group cursor-pointer">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, rgba(233,178,60,0.25), transparent 60%)",
            }}
          />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold text-deep-green shadow-xl group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" className="h-6 w-6 ml-1" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-4 left-4 font-mono-label text-[11px] uppercase text-cream-light/70">
            {hero.videoLabel} · {hero.videoNote}
          </span>
        </div>
      </div>
    </section>
  );
}
