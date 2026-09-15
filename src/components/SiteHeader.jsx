export function SiteHeader({ active, onNavigate }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => onNavigate("start")}>
        <span className="brand-mark">PC</span>
        <span>
          PC<span className="brand-accent">Lab</span>
        </span>
      </button>
      <nav aria-label="Hauptnavigation">
        {["Theorie", "Bauen", "Quiz"].map((item) => (
          <button
            key={item}
            className={
              active === item.toLowerCase() ? "nav-link active" : "nav-link"
            }
            onClick={() => onNavigate(item.toLowerCase())}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}
