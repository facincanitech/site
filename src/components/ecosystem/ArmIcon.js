const accentBg = {
  green: "bg-forest/15 text-forest",
  gold: "bg-gold/20 text-gold",
  terracotta: "bg-terracotta/15 text-terracotta",
};

export default function ArmIcon({ shape, accent = "gold", className = "" }) {
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${accentBg[accent]} ${className}`}
    >
      {shape === "half" && (
        <svg viewBox="0 0 24 24" className="h-4 w-4">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" />
        </svg>
      )}
      {shape === "diamond" && (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" transform="rotate(45 12 12)" />
        </svg>
      )}
      {shape === "flower" && (
        <svg viewBox="0 0 24 24" className="h-4 w-4">
          {[0, 72, 144, 216, 288].map((deg) => (
            <circle
              key={deg}
              cx="12"
              cy="6.5"
              r="3.6"
              fill="currentColor"
              opacity="0.85"
              transform={`rotate(${deg} 12 12)`}
            />
          ))}
        </svg>
      )}
    </span>
  );
}
