import { QuizCard } from "../components/QuizCard";

export function QuizPage({
  questions,
  index,
  score,
  answered,
  complete,
  onAnswer,
  onNext,
  onRestart,
}) {
  if (complete) {
    const percentage = Math.round((score / questions.length) * 100);
    const message =
      percentage >= 80
        ? "Stark gemacht! Du kennst dich schon richtig gut aus."
        : percentage >= 50
          ? "Guter Anfang! Ein paar Bauteile kannst du noch genauer kennenlernen."
          : "Weiter üben lohnt sich: Entdecke die Theorie und versuche es erneut.";

    return (
      <section className="content-section quiz-section">
        <div className="quiz-result">
          <p className="eyebrow">03 · AUSWERTUNG</p>
          <div className="result-score">
            <strong>{score}</strong>
            <span>/ {questions.length} Punkte</span>
          </div>
          <h2>
            Dein Ergebnis
            <br />
            <em>{percentage}% richtig.</em>
          </h2>
          <p>{message}</p>
          <button className="next-button" onClick={onRestart}>
            Quiz neu starten <span>→</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="content-section quiz-section">
      <div className="quiz-top">
        <div>
          <p className="eyebrow">03 · WISSENSCHECK</p>
          <h2>
            Wie gut kennst
            <br />
            <em>du dich aus?</em>
          </h2>
        </div>
        <div className="score-box">
          <span>PUNKTE</span>
          <strong>
            {score} / {questions.length}
          </strong>
        </div>
      </div>
      <QuizCard
        question={questions[index]}
        index={index}
        total={questions.length}
        answered={answered}
        onAnswer={onAnswer}
        onNext={onNext}
      />
    </section>
  );
}
