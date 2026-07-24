"use client";

import { useState } from "react";

const icons = ["◑", "✳", "✦"];

export default function CollectionIntro({ l }) {
  const [active, setActive] = useState(null);

  return (
    <section id="collection" className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20">
        <p className="font-mono-label text-xs uppercase text-terracotta mb-4">
          {l.collection.eyebrow}
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-forest">{l.collection.titleA} </span>
          <span className="text-terracotta">{l.collection.titleB}</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink/70 leading-relaxed">
          {l.collection.paragraph}
        </p>

        <div className="mt-10 rounded-2xl border border-ink/10 bg-cream-light p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="font-mono-label text-[11px] uppercase text-terracotta mb-1.5">
                {l.collection.picker.eyebrow}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-ink">
                {l.collection.picker.title}
              </h3>
            </div>
            {active !== null && (
              <button
                onClick={() => setActive(null)}
                className="inline-flex items-center gap-2 rounded-full bg-deep-green px-4 py-2 text-sm font-semibold text-cream-light"
              >
                ✕ {l.collection.picker.seeAll}
              </button>
            )}
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {l.collection.picker.intentions.map((intent, i) => (
              <button
                key={intent.title}
                onClick={() => setActive(i)}
                className={`text-left rounded-xl border p-5 transition-colors ${
                  active === i
                    ? "border-terracotta bg-terracotta/5"
                    : "border-ink/10 bg-cream hover:border-ink/25"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg text-gold">{icons[i % icons.length]}</span>
                  <span className="font-mono-label text-[10px] text-ink/30">
                    {intent.index}
                  </span>
                </div>
                <p className="font-semibold text-ink">{intent.title}</p>
                <p className="mt-1 text-sm text-ink/60">{intent.text}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
