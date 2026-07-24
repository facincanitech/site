function renderQuote(text) {
  const parts = text.split(/(\{[^}]+\})/g);
  return parts.map((part, i) => {
    const match = part.match(/^\{([^}]+)\}$/);
    if (match) {
      return (
        <span key={i} className="text-terracotta">
          {match[1]}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function Quotes({ t }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative rounded-2xl bg-cream-light p-10 md:p-12">
            <p className="font-mono-label text-xs uppercase text-terracotta mb-6">
              {t.quotes.col1.label}
            </p>
            <p className="text-3xl sm:text-4xl font-bold leading-tight text-deep-green">
              {renderQuote(t.quotes.col1.text)}
            </p>
            <span className="absolute bottom-6 right-8 h-2 w-2 rotate-45 bg-terracotta/40" />
          </div>
          <div className="relative rounded-2xl bg-[#e9e2cd] p-10 md:p-12">
            <p className="font-mono-label text-xs uppercase text-forest mb-6">
              {t.quotes.col2.label}
            </p>
            <p className="text-3xl sm:text-4xl font-bold leading-tight text-deep-green">
              {renderQuote(t.quotes.col2.text)}
            </p>
            <span className="absolute bottom-6 right-8 h-2 w-2 rotate-45 border border-deep-green/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
