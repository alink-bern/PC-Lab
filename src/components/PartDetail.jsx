import { PartIcon } from "./PartIcon";

export function PartDetail({ part }) {
  if (!part) {
    return (
      <div className="empty-detail">
        <span>✦</span>
        <p>
          Wähle eine Karte aus,
          <br />
          um mehr zu erfahren.
        </p>
      </div>
    );
  }

  return (
    <>
      <span className={`part-icon detail-icon ${part.color}`}>
        <PartIcon id={part.id} size={30} />
      </span>
      <p className="eyebrow">
        {part.short} · {part.role}
      </p>
      <h3>{part.name}</h3>
      <p>{part.text}</p>
      <div className="fact">
        <strong>Gut zu wissen</strong>
        <span>{part.fact}</span>
      </div>
    </>
  );
}
