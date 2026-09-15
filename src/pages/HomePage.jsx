import { HeroIllustration } from "../components/HeroIllustration";

export function HomePage({ onNavigate }) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">PC-WISSEN FÜR EINSTEIGER · AB 14</p>
        <h1>
          Dein erster
          <br />
          <em>eigener PC.</em>
        </h1>
        <p className="hero-text">
          Verstehe, was in einem Computer steckt. Lerne die Bauteile kennen,
          setze sie zusammen und teste dein Wissen.
        </p>
        <div className="hero-actions">
          <button
            className="primary-button"
            onClick={() => onNavigate("theorie")}
          >
            Lernreise starten <span>→</span>
          </button>
          <button className="text-button" onClick={() => onNavigate("bauen")}>
            Direkt zum Builder <span>↗</span>
          </button>
        </div>
      </div>
      <HeroIllustration />
    </section>
  );
}
