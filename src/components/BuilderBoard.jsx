import { BuilderPartGraphic } from "./BuilderPartGraphic";
import { MainboardGraphic } from "./MainboardGraphic";

const slots = ["cpu", "ram", "gpu", "ssd", "psu"];

export function BuilderBoard({
  parts,
  placements,
  onDragStart,
  onDrop,
  onCheck,
  checked,
  notice,
}) {
  const boardPlaced = placements.some((placement) => placement.id === "board");
  const getPlacement = (slot) =>
    placements.find((placement) => placement.slot === slot);

  return (
    <div
      className={`pc-case ${checked ? "complete" : ""}`}
      onDragOver={(event) => event.preventDefault()}
      onDrop={onDrop}
    >
      <div className="case-top">
        PC CASE{" "}
        <span>
          {placements.length} / {parts.length}
        </span>
      </div>
      <div className="case-window">
        <div className="case-board">
          <MainboardGraphic active={boardPlaced} />
          {slots.map((id) => {
            const part = parts.find((item) => item.id === id);
            const placement = getPlacement(id);
            return (
              <div
                key={id}
                className={`builder-slot placed-${id} ${placement ? "filled" : ""} ${placement && !placement.correct ? "wrong" : ""}`}
                title={part.name}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => {
                  event.stopPropagation();
                  onDrop(event, id);
                }}
              >
                {placement ? (
                  <span
                    draggable
                    onDragStart={(event) => onDragStart(event, placement.id)}
                  >
                    <BuilderPartGraphic
                      part={parts.find((item) => item.id === placement.id)}
                      placed
                    />
                  </span>
                ) : null}
              </div>
            );
          })}
          {!boardPlaced && (
            <div className="drop-message">
              <span>01</span>
              <strong>Setze zuerst das Mainboard ein</strong>
              <small>Es bildet die Basis für alle weiteren Teile.</small>
            </div>
          )}
        </div>
        <div className="case-fan">◉</div>
      </div>
      <div className="builder-controls">
        <button
          className="check-button"
          disabled={placements.length !== parts.length}
          onClick={onCheck}
        >
          PC prüfen <span>→</span>
        </button>
        <span className={`case-light ${checked ? "blinking" : ""}`} />
      </div>
      {notice && (
        <p className={`builder-notice ${checked ? "success" : ""}`}>{notice}</p>
      )}
    </div>
  );
}
