import Link from "next/link";
import { renderHighlighted } from "@/lib/highlight";

export default function ConnectiveSection({ connective }) {
  return (
    <section className="bg-deep-green">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28">
        <p className="font-mono-label text-xs uppercase text-terracotta mb-6">
          {connective.eyebrow}
        </p>
        <p className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-cream-light">
          {renderHighlighted(connective.quote, "text-gold")}
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-5xl">
          <p className="text-cream-light/80 leading-relaxed">
            {renderHighlighted(connective.paragraph1, "text-gold-light font-semibold")}
          </p>
          <p className="text-cream-light/80 leading-relaxed">
            {renderHighlighted(connective.paragraph2, "text-terracotta font-semibold")}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/support"
            className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 font-semibold text-deep-green hover:bg-gold-light transition-colors"
          >
            {connective.ctaPrimary}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep-green text-gold">
              →
            </span>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-cream-light/30 px-6 py-3.5 font-semibold text-cream-light hover:border-cream-light/60 transition-colors"
          >
            {connective.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
