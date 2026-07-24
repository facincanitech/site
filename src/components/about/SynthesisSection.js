import Link from "next/link";
import { renderHighlighted } from "@/lib/highlight";

export default function SynthesisSection({ a }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 pb-20 md:pb-28">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-14 md:py-20"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--color-ink) 0%, #14140f 55%, var(--color-deep-green) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--color-gold)" }}
          />

          <div className="relative">
            <p className="font-mono-label text-xs uppercase text-gold-light mb-6">
              {a.synthesis.eyebrow}
            </p>
            <p className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-cream-light">
              {renderHighlighted(a.synthesis.quote, "text-gold")}
            </p>
            <p className="mt-6 max-w-xl text-cream-light/60 leading-relaxed">
              {a.synthesis.subtext}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/support"
                className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 font-semibold text-deep-green hover:bg-gold-light transition-colors"
              >
                {a.synthesis.ctaPrimary}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep-green text-gold">
                  →
                </span>
              </Link>
              <Link
                href="/#neta"
                className="inline-flex items-center gap-2 rounded-full border border-cream-light/30 px-6 py-3.5 font-semibold text-cream-light hover:border-cream-light/60 transition-colors"
              >
                {a.synthesis.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
