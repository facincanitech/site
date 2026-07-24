"use client";

import { useState } from "react";

const CONTACT_EMAIL = "rotadosolestacaobr@gmail.com";

export default function DataRoomCTA({ dataroom }) {
  const [form, setForm] = useState({ name: "", fund: "", email: "" });

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Data Room Access Request — Rota do Sol");
    const body = encodeURIComponent(
      `Name: ${form.name}\nFund / Company: ${form.fund}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-label text-xs uppercase text-gold-light">
            {dataroom.eyebrow}
          </span>
          <span className="h-px flex-1 max-w-24 bg-cream-light/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-cream-light">
          {dataroom.title}
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-cream-light/70 leading-relaxed">
          {dataroom.paragraph}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              "Executive Teaser Request — Rota do Sol"
            )}`}
            className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 font-semibold text-deep-green hover:bg-gold-light transition-colors"
          >
            {dataroom.ctaTeaser}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep-green text-gold">
              ↓
            </span>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              "Schedule a Meeting — Rota do Sol"
            )}`}
            className="inline-flex items-center gap-2 rounded-full border border-cream-light/30 px-6 py-3.5 font-semibold text-cream-light hover:border-cream-light/60 transition-colors"
          >
            {dataroom.ctaSchedule}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-xl rounded-2xl border border-cream-light/15 bg-cream-light/5 p-6 md:p-8"
        >
          <h3 className="font-bold text-cream-light mb-5">{dataroom.ctaDataRoom}</h3>
          <div className="space-y-3">
            <input
              required
              type="text"
              placeholder={dataroom.form.name}
              value={form.name}
              onChange={handleChange("name")}
              className="w-full rounded-lg border border-cream-light/20 bg-transparent px-4 py-3 text-sm text-cream-light placeholder:text-cream-light/40 outline-none focus:border-gold"
            />
            <input
              required
              type="text"
              placeholder={dataroom.form.fund}
              value={form.fund}
              onChange={handleChange("fund")}
              className="w-full rounded-lg border border-cream-light/20 bg-transparent px-4 py-3 text-sm text-cream-light placeholder:text-cream-light/40 outline-none focus:border-gold"
            />
            <input
              required
              type="email"
              placeholder={dataroom.form.email}
              value={form.email}
              onChange={handleChange("email")}
              className="w-full rounded-lg border border-cream-light/20 bg-transparent px-4 py-3 text-sm text-cream-light placeholder:text-cream-light/40 outline-none focus:border-gold"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full sm:w-auto rounded-full bg-gold px-6 py-3 font-semibold text-deep-green hover:bg-gold-light transition-colors"
          >
            {dataroom.form.submit}
          </button>
          <p className="mt-3 font-mono-label text-[10px] uppercase text-cream-light/40">
            {dataroom.form.note}
          </p>
        </form>
      </div>
    </section>
  );
}
