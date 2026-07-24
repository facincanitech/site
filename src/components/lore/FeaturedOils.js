"use client";

import { useState } from "react";
import ProductBottle from "./ProductBottle";

export default function FeaturedOils({ l }) {
  const items = l.featured.items;
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - 1);

  const go = (dir) => setIndex((i) => Math.min(Math.max(i + dir, 0), maxIndex));

  return (
    <section className="bg-deep-green-2">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
          <div>
            <p className="font-mono-label text-xs uppercase text-gold-light mb-3">
              {l.featured.eyebrow}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-cream-light">
              {l.featured.title}
            </h2>
            <p className="mt-4 max-w-xl text-cream-light/70 leading-relaxed">
              {l.featured.paragraph}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-light/25 text-cream-light hover:bg-cream-light/10 transition-colors"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-deep-green hover:bg-gold-light transition-colors"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${index} * (25% + 1.1rem)))` }}
          >
            {items.map((item, i) => (
              <div
                key={item.name}
                className="shrink-0 basis-[80%] sm:basis-[45%] lg:basis-[25%] rounded-2xl border border-cream-light/10 bg-cream-light/5 p-4 flex flex-col"
              >
                <span className="font-mono-label text-[10px] text-gold-light mb-2">
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <ProductBottle name={item.name} square />
                <h3 className="mt-4 text-xl font-bold text-cream-light">{item.name}</h3>
                <p className="mt-1 font-mono-label text-[10px] uppercase text-terracotta">
                  · {item.tag}
                </p>
                <p className="mt-3 text-sm text-cream-light/65 leading-relaxed flex-1">
                  {item.text}
                </p>
                <p className="mt-4 pt-4 border-t border-cream-light/10 font-mono-label text-[10px] uppercase text-cream-light/40">
                  · {l.featured.footer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 h-1 w-full rounded-full bg-cream-light/10 overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-500"
            style={{ width: `${((index + 1) / items.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
