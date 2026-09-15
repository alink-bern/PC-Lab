export function MainboardGraphic({ active }) {
  return (
    <svg
      className={`mainboard-graphic ${active ? "active" : ""}`}
      viewBox="0 0 360 440"
      role="img"
      aria-label="Mainboard mit freien Steckplätzen"
    >
      <rect
        className="board-surface"
        x="10"
        y="10"
        width="340"
        height="420"
        rx="8"
      />
      <path
        className="board-trace"
        d="M28 58h72M28 76h44M278 38h46M286 404h38M30 382h78M48 210h42M270 218h48"
      />
      <path
        className="board-trace"
        d="M100 33v36M116 33v36M132 33v36M148 33v36M164 33v36M180 33v36M196 33v36M212 33v36"
      />
      <g className="board-mounts">
        <circle cx="35" cy="35" r="8" />
        <circle cx="325" cy="35" r="8" />
        <circle cx="35" cy="405" r="8" />
        <circle cx="325" cy="405" r="8" />
      </g>
      <g className="board-port">
        <rect x="10" y="92" width="20" height="82" />
        <rect x="10" y="190" width="20" height="46" />
        <rect x="330" y="140" width="20" height="95" />
      </g>
      <g className="board-chip">
        <rect x="40" y="54" width="42" height="28" rx="3" />
        <path d="M46 61h30M46 68h22M46 75h27" />
      </g>
      <g className="board-cooler">
        <rect x="78" y="112" width="122" height="112" rx="5" />
        <circle cx="139" cy="168" r="45" />
        <path d="M139 123c18 16 20 30 5 45M181 168c-16 18-30 20-45 5M139 213c-18-16-20-30-5-45M97 168c16-18 30-20 45-5" />
      </g>
      <g className="board-ram-lines">
        <rect x="238" y="66" width="17" height="142" />
        <rect x="261" y="66" width="17" height="142" />
        <rect x="284" y="66" width="17" height="142" />
      </g>
      <g className="board-heatsink">
        <rect x="245" y="276" width="66" height="48" rx="3" />
        <path d="M252 283h52M252 292h52M252 301h52M252 310h52M252 319h52" />
      </g>
      <g className="board-connectors">
        <rect x="54" y="270" width="112" height="12" rx="2" />
        <rect x="54" y="292" width="78" height="12" rx="2" />
        <rect x="54" y="314" width="98" height="12" rx="2" />
        <rect x="188" y="354" width="94" height="38" rx="3" />
      </g>
      <g className="board-empty-slot board-slot-cpu">
        <rect x="86" y="119" width="106" height="98" rx="4" />
      </g>
      <g className="board-empty-slot board-slot-ram">
        <rect x="232" y="57" width="68" height="158" rx="4" />
      </g>
      <g className="board-empty-slot board-slot-gpu">
        <rect x="54" y="338" width="166" height="42" rx="4" />
      </g>
      <g className="board-empty-slot board-slot-ssd">
        <rect x="244" y="236" width="72" height="34" rx="4" />
      </g>
      <g className="board-empty-slot board-slot-psu">
        <rect x="190" y="354" width="96" height="40" rx="4" />
      </g>
      <text className="board-label" x="28" y="422">
        PC LAB · MAINBOARD
      </text>
    </svg>
  );
}
