"use client";

import { useState } from "react";
import Link from "next/link";
import { locales } from "@/lib/content";
import { useLocale } from "@/lib/locale-context";

const hrefs = ["/", "/about", "/ecosystem", "/lore-botanical", "/investors", "/journal", "/support", "/gallery"];

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const nav = t.nav;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-light/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="shrink-0 flex items-center" aria-label="Rota do Sol, home">
          <img
            src="/images/brand/logo.webp"
            alt="Rota do Sol"
            width={160}
            height={160}
            className="h-10 md:h-12 lg:h-14 w-auto block"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item, i) => (
            <Link
              key={item}
              href={hrefs[i] || "#"}
              className="text-sm font-medium text-ink/80 hover:text-terracotta transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 font-mono-label text-xs uppercase">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                <button
                  onClick={() => setLocale(l)}
                  className={
                    l === locale
                      ? "font-bold text-deep-green"
                      : "text-ink/50 hover:text-terracotta transition-colors"
                  }
                >
                  {l.toUpperCase()}
                </button>
                {i < locales.length - 1 && <span className="text-ink/30">·</span>}
              </span>
            ))}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-ink/20"
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-4 bg-ink" />
              <span className="block h-0.5 w-4 bg-ink" />
              <span className="block h-0.5 w-4 bg-ink" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-cream-light px-6 py-4">
          <nav className="flex flex-col gap-3">
            {nav.map((item, i) => (
              <Link key={item} href={hrefs[i] || "#"} className="text-sm font-medium text-ink/80">
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 font-mono-label text-xs uppercase mt-4 pt-4 border-t border-ink/10">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                <button
                  onClick={() => setLocale(l)}
                  className={l === locale ? "font-bold text-deep-green" : "text-ink/50"}
                >
                  {l.toUpperCase()}
                </button>
                {i < locales.length - 1 && <span className="text-ink/30">·</span>}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
