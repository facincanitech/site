"use client";

import { useLocale } from "@/lib/locale-context";

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="bg-deep-green">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <a href="#top" className="block text-[40px] md:text-[52px] leading-[0.95] font-bold text-cream-light">
            Rota
            <br />
            do <span className="text-gold">Sol</span>
          </a>
          <p className="mt-5 max-w-sm text-sm text-cream-light/60 leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        {t.footer.columns.map((col) => (
          <div key={col.title}>
            <p className="font-mono-label text-xs uppercase text-gold-light mb-4">
              {col.title}
            </p>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-cream-light/70 hover:text-cream-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-cream-light/10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-2 font-mono-label text-[11px] uppercase text-cream-light/40">
          <span>© {new Date().getFullYear()} Rota do Sol</span>
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
