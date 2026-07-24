export default function SunIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="9" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI) / 6;
        const x1 = 24 + Math.cos(angle) * 14;
        const y1 = 24 + Math.sin(angle) * 14;
        const x2 = 24 + Math.cos(angle) * 21;
        const y2 = 24 + Math.sin(angle) * 21;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
