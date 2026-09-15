import { PartIcon } from "./PartIcon";

export function PartCard({ part, explored, onSelect }) {
  return (
    <button
      className={`part-card ${part.color} ${explored ? "explored" : ""}`}
      onClick={() => onSelect(part)}
      aria-label={`${part.name} ${explored ? "gelernt" : "entdecken"}`}
      aria-pressed={explored}
    >
      <span className="part-icon">
        <PartIcon id={part.id} />
      </span>
      <span className="part-short">{part.short}</span>
      <strong>{part.name}</strong>
      <small>{explored ? "Gelernt ✓" : "Entdecken →"}</small>
    </button>
  );
}
