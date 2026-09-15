import { BuilderBoard } from "../components/BuilderBoard";
import { BuilderPartGraphic } from "../components/BuilderPartGraphic";

export function BuilderPage({
  parts,
  placements,
  placedIds,
  onDrop,
  onDragStart,
  onCheck,
  checked,
  notice,
}) {
  const selectableParts = parts.filter((part) => part.id !== "board");

  return (
    <section className="content-section builder-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 · DER BUILDER</p>
          <h2>
            Setz ihn
            <br />
            <em>zusammen.</em>
          </h2>
        </div>
        <p className="section-intro">
          Das Mainboard ist bereits eingesetzt. Ziehe die passenden Komponenten
          auf ihre freien Steckplätze.
        </p>
      </div>
      <div className="builder-layout">
        <div className="part-tray">
          {selectableParts.map((part) => (
            <div
              draggable={!placedIds.includes(part.id)}
              onDragStart={(event) => onDragStart(event, part.id)}
              className={`drag-part ${placedIds.includes(part.id) ? "used" : ""}`}
              key={part.id}
            >
              <BuilderPartGraphic part={part} />
              <span>{part.name}</span>
              <b>{placedIds.includes(part.id) ? "✓" : "⠿"}</b>
            </div>
          ))}
        </div>
        <BuilderBoard
          parts={parts}
          placements={placements}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onCheck={onCheck}
          checked={checked}
          notice={notice}
        />
      </div>
    </section>
  );
}
