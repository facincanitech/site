const colorMap = {
  gold: "text-gold font-semibold",
  terracotta: "text-terracotta font-semibold",
  green: "text-forest font-semibold",
  ink: "text-ink font-semibold",
};

export function renderHighlighted(text, colorClass = "text-gold") {
  const parts = text.split(/(\{[^}]+\})/g);
  return parts.map((part, i) => {
    const match = part.match(/^\{(?:(\w+):)?([^}]+)\}$/);
    if (match) {
      const [, colorKey, content] = match;
      const cls = colorKey ? colorMap[colorKey] || colorClass : colorClass;
      return (
        <span key={i} className={cls}>
          {content}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
