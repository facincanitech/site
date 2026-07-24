export default function JournalStub({ j }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 pt-16 md:pt-24 pb-28 md:pb-36">
        <div className="rounded-2xl border border-dashed border-ink/20 bg-cream-light p-10 md:p-16 max-w-3xl mx-auto text-center">
          <span className="font-mono-label inline-block mb-4 text-terracotta">
            {j.stub.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-forest mb-5">
            {j.stub.title}
          </h2>
          <p className="text-base leading-relaxed text-ink/70">{j.stub.text}</p>
        </div>
      </div>
    </section>
  );
}
