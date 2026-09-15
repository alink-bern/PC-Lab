export function AdvancedTopicCard({ topic }) {
  return (
    <article className={`advanced-topic-card ${topic.color}`}>
      <div className="advanced-topic-number">{topic.number}</div>
      <div>
        <p className="advanced-topic-label">{topic.label}</p>
        <h3>{topic.title}</h3>
        <p className="advanced-topic-text">{topic.text}</p>
        <div className="advanced-topic-tip">
          <strong>Darauf achten</strong>
          <span>{topic.tip}</span>
        </div>
      </div>
    </article>
  );
}
