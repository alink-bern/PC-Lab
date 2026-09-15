const iconShapes = {
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <rect x="10" y="10" width="4" height="4" rx=".5" />
      <path d="M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3M9 4v3M12 4v3M15 4v3M9 17v3M12 17v3M15 17v3" />
    </>
  ),
  gpu: (
    <>
      <rect x="3" y="6" width="18" height="9" rx="1.5" />
      <circle cx="9" cy="10.5" r="2.2" />
      <path d="M13 9h5M13 12h3M6 15v3M18 15v3" />
    </>
  ),
  ram: (
    <>
      <rect x="4" y="7" width="16" height="7" rx="1" />
      <path d="M7 9v3M10 9v3M13 9v3M16 9v3M6 14v3M9 14v3M12 14v3M15 14v3M18 14v3" />
    </>
  ),
  ssd: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="8" r="2" />
      <path d="M8 14h8M8 17h5" />
    </>
  ),
  board: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <rect x="8" y="8" width="5" height="5" />
      <path d="M15 8h2M15 11h2M8 16h9M4 8H2M4 12H2M4 16H2" />
    </>
  ),
  psu: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M13 5l-5 8h4l-1 6 5-8h-4z" />
    </>
  ),
};

export function PartIcon({ id, size = 24 }) {
  return (
    <svg
      className="part-vector-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconShapes[id]}
    </svg>
  );
}
