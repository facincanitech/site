export default function JournalHero({ j }) {
  return (
    <section
      className="relative overflow-hidden bg-deep-green-2"
      style={{
        backgroundImage:
          "linear-gradient(120deg, var(--color-deep-green) 0%, var(--color-deep-green-2) 55%, var(--color-forest) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-gold) 0%, var(--color-gold) 22%, rgba(232,179,57,0.2) 60%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="font-mono-label text-xs uppercase text-gold-light">
            {j.eyebrow}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight max-w-[16ch]">
          <span className="text-cream-light">{j.titleA}</span>
          <br />
          <span className="text-gold">{j.titleB}</span>
        </h1>

        <div className="mt-10 grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16 items-end">
          <p className="max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-cream-light/85">
            {j.paragraph}
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            role="search"
            className="flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full border border-cream-light/20 bg-cream-light/5"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold-light shrink-0"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              placeholder={j.searchPlaceholder}
              aria-label={j.searchPlaceholder}
              className="flex-1 min-w-0 bg-transparent outline-none text-sm text-cream-light placeholder:text-cream-light/40"
            />
            <button
              type="submit"
              className="rounded-full px-4 py-2 font-semibold text-xs bg-gold text-deep-green hover:bg-gold-light transition-colors"
            >
              {j.searchButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
