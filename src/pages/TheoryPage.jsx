import { PartCard } from "../components/PartCard";
import { PartDetail } from "../components/PartDetail";
import { AdvancedTopicCard } from "../components/AdvancedTopicCard";

export function TheoryPage({
  parts,
  explored,
  selected,
  onSelect,
  advancedTopics,
}) {
  return (
    <section className="content-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 · DIE BAUTEILE</p>
          <h2>
            Was steckt
            <br />
            <em>drin?</em>
          </h2>
        </div>
        <p className="section-intro">
          Ein PC besteht aus mehreren Spezialisten. Klicke auf eine Karte und
          finde heraus, welche Aufgabe sie übernimmt.
        </p>
      </div>
      <div className="parts-layout">
        <div className="parts-grid">
          {parts.map((part) => (
            <PartCard
              key={part.id}
              part={part}
              explored={explored.includes(part.id)}
              onSelect={onSelect}
            />
          ))}
        </div>
        <div className="detail-panel">
          <PartDetail part={selected} />
        </div>
      </div>
      <section className="advanced-section" aria-labelledby="advanced-heading">
        <div className="advanced-heading">
          <div>
            <p className="eyebrow">02 · PC BAUEN</p>
            <h2 id="advanced-heading">
              Erst prüfen,
              <br />
              <em>dann bauen.</em>
            </h2>
          </div>
          <p className="section-intro">
            Jetzt wird es genauer: Diese Checkpoints helfen dir, kompatible
            Komponenten auszuwählen und typische Fehler zu vermeiden.
          </p>
        </div>
        <div className="advanced-topics-grid">
          {advancedTopics.map((topic) => (
            <AdvancedTopicCard key={topic.number} topic={topic} />
          ))}
        </div>
      </section>
    </section>
  );
}
