import { PartIcon } from "./PartIcon";

export function BuilderPartGraphic({ part, placed = false }) {
  return (
    <span
      className={`builder-part-graphic builder-graphic-${part.id} ${placed ? "is-placed" : ""}`}
    >
      <span className="builder-graphic-ring" />
      <PartIcon id={part.id} size={placed ? 44 : 52} />
      <small>{placed ? part.name : part.short}</small>
    </span>
  );
}
