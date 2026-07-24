export default function ManifestoStrip({ l }) {
  return (
    <section className="bg-cream-light">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-[0.3fr_1.7fr] gap-6">
        <p className="font-mono-label text-xs uppercase text-terracotta">
          {l.manifesto.eyebrow}
        </p>
        <p className="max-w-3xl text-2xl sm:text-3xl font-semibold leading-snug text-ink">
          {l.manifesto.text}
        </p>
      </div>
    </section>
  );
}
