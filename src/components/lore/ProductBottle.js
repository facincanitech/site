export default function ProductBottle({ name, square, badge }) {
  return (
    <div
      className={`relative w-full ${square ? "aspect-square" : "aspect-[4/5]"} rounded-2xl overflow-hidden border border-ink/10`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 25% 82%, #9c6a35 0%, #5c3a1c 42%, #241408 100%)",
      }}
    >
      {badge && (
        <span className="absolute top-3 left-3 z-10 rounded bg-black/55 px-2 py-1 font-mono-label text-[9px] uppercase text-cream-light">
          {badge}
        </span>
      )}
      <div className="absolute inset-0 flex items-end justify-center pb-6">
        <div className="relative flex h-4/5 w-2/5 flex-col items-center">
          <div className="w-[70%] rounded-t bg-cream-light px-1.5 py-2.5 text-center shadow-md">
            <p className="font-mono-label text-[6px] tracking-wider text-ink/60">
              ROTA DO SOL
            </p>
            <p className="mt-1 text-[9px] font-bold leading-tight text-deep-green">
              {name}
            </p>
          </div>
          <div className="flex-1 w-full rounded-b-md border border-black/40 bg-gradient-to-b from-[#7a4520] to-[#2c1a0c]" />
        </div>
      </div>
    </div>
  );
}
