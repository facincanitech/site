"use client";

import { useEffect, useRef, useState } from "react";

const gradients = [
  "radial-gradient(circle at 30% 20%, #6f9c78, #1f3626 70%)",
  "radial-gradient(circle at 60% 30%, #f2c766, #8a5a1e 75%)",
  "radial-gradient(circle at 40% 40%, #c05a35, #3a1a10 75%)",
  "radial-gradient(circle at 50% 20%, #7fb0c9, #1f3626 75%)",
  "radial-gradient(circle at 55% 35%, #e9b23c, #16261b 75%)",
  "radial-gradient(circle at 35% 25%, #9c7f5c, #1b1b16 75%)",
];

export default function Carousel({ t }) {
  const items = t.carousel.items;
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5000);
    return () => clearInterval(id);
  }, [items.length]);

  const go = (dir) => {
    setIndex((i) => (i + dir + items.length) % items.length);
  };

  return (
    <section className="bg-cream-light border-t border-ink/10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="font-mono-label text-xs uppercase text-terracotta mb-2">
              {t.carousel.eyebrow}
            </p>
            <div className="flex items-baseline gap-3">
              <h3 className="text-3xl sm:text-4xl font-bold text-deep-green">
                {t.carousel.title}
              </h3>
              <span className="font-mono-label text-sm text-ink/40">
                {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 hover:bg-ink/5 transition-colors"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-deep-green text-cream-light hover:bg-forest transition-colors"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${index} * (25% + 1.1rem)))` }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="relative shrink-0 basis-[70%] sm:basis-[45%] lg:basis-[25%] aspect-[4/5] rounded-2xl overflow-hidden border border-ink/10 shadow-sm"
                style={{ backgroundImage: gradients[i % gradients.length] }}
              >
                <span className="absolute top-3 left-3 rounded bg-black/50 px-2 py-1 font-mono-label text-[10px] uppercase text-cream-light">
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <span className="absolute bottom-3 left-3 right-3 rounded bg-black/50 px-2 py-1 font-mono-label text-[10px] uppercase text-cream-light truncate">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-deep-green" : "w-1.5 bg-ink/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="font-mono-label text-[11px] uppercase text-ink/40">
            {t.carousel.auto} →
          </span>
        </div>
      </div>
    </section>
  );
}
