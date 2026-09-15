export function QuizCard({
  question,
  index,
  total,
  answered,
  onAnswer,
  onNext,
}) {
  return (
    <div className="quiz-card">
      <div className="question-count">
        FRAGE {index + 1} <span>von {total}</span>
      </div>
      <span
        className={`question-level ${question.level === "Fortgeschritten" ? "advanced" : "basic"}`}
      >
        {question.level || "Basics"}
      </span>
      <h3>{question.question}</h3>
      <div className="answers">
        {question.options.map((option, optionIndex) => (
          <button
            key={option}
            className={
              answered === null
                ? ""
                : optionIndex === question.answer
                  ? "correct"
                  : answered === optionIndex
                    ? "wrong"
                    : ""
            }
            onClick={() => onAnswer(optionIndex)}
          >
            <span>{String.fromCharCode(65 + optionIndex)}</span>
            {option}
            {answered !== null && optionIndex === question.answer && <b>✓</b>}
          </button>
        ))}
      </div>
      {answered !== null && (
        <button className="next-button" onClick={onNext}>
          {index === total - 1 ? "Auswertung anzeigen" : "Nächste Frage"} →
        </button>
      )}
    </div>
  );
}
