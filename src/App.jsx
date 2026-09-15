import { useState } from "react";
import "./App.css";
import { BuilderPage } from "./pages/BuilderPage";
import { HomePage } from "./pages/HomePage";
import { QuizPage } from "./pages/QuizPage";
import { TheoryPage } from "./pages/TheoryPage";
import { advancedTopics, parts, questions } from "./data/pcData";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

function shuffleAnswers(question) {
  const options = question.options.map((text, index) => ({
    text,
    correct: index === question.answer,
  }));

  for (let index = options.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [options[index], options[randomIndex]] = [
      options[randomIndex],
      options[index],
    ];
  }

  return {
    ...question,
    options: options.map((option) => option.text),
    answer: options.findIndex((option) => option.correct),
  };
}

function createQuizRound() {
  return questions.map(shuffleAnswers);
}

function App() {
  const [active, setActive] = useState("start");
  const [explored, setExplored] = useState([]);
  const [placements, setPlacements] = useState([
    { id: "board", slot: "board", correct: true },
  ]);
  const [selected, setSelected] = useState(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState(createQuizRound);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [builderNotice, setBuilderNotice] = useState("");
  const [builderChecked, setBuilderChecked] = useState(false);

  const navigate = (page) => setActive(page);
  const selectPart = (part) => {
    setSelected(part);
    if (!explored.includes(part.id)) setExplored([...explored, part.id]);
  };
  const dropPart = (event, targetSlot) => {
    const id = event.dataTransfer.getData("part");
    if (!id || !targetSlot || id === "board") return;
    if (!placements.some((placement) => placement.id === "board")) {
      setBuilderNotice("Das Mainboard muss zuerst eingesetzt werden.");
      return;
    }
    setBuilderChecked(false);
    setPlacements((current) => [
      ...current.filter(
        (placement) => placement.id !== id && placement.slot !== targetSlot,
      ),
      { id, slot: targetSlot, correct: id === targetSlot },
    ]);
    setBuilderNotice(
      id === targetSlot
        ? "Komponente richtig eingesetzt."
        : "Falsch eingesetzt. Ziehe die Komponente an den passenden Steckplatz.",
    );
  };
  const startDrag = (event, id) => event.dataTransfer.setData("part", id);
  const answerQuestion = (option) => {
    if (answered !== null) return;
    setAnswered(option);
    if (option === quizQuestions[quizIndex].answer) setScore(score + 1);
  };
  const nextQuestion = () => {
    if (quizIndex === quizQuestions.length - 1) {
      setQuizComplete(true);
      return;
    }
    setAnswered(null);
    setQuizIndex((current) => current + 1);
  };
  const restartQuiz = () => {
    setQuizIndex(0);
    setQuizQuestions(createQuizRound());
    setScore(0);
    setAnswered(null);
    setQuizComplete(false);
  };
  const checkBuilder = () => {
    const isCorrect =
      placements.length === parts.length &&
      placements.every((placement) => placement.correct);
    setBuilderChecked(isCorrect);
    setBuilderNotice(
      isCorrect
        ? "Alles sitzt richtig. Dein PC ist startklar!"
        : "Noch nicht ganz: Prüfe die Reihenfolge und alle Bauteile.",
    );
  };

  const placedIds = placements.map((placement) => placement.id);

  const page =
    active === "theorie" ? (
      <TheoryPage
        parts={parts}
        explored={explored}
        selected={selected}
        onSelect={selectPart}
        advancedTopics={advancedTopics}
      />
    ) : active === "bauen" ? (
      <BuilderPage
        parts={parts}
        placements={placements}
        placedIds={placedIds}
        onDrop={dropPart}
        onDragStart={startDrag}
        onCheck={checkBuilder}
        checked={builderChecked}
        notice={builderNotice}
      />
    ) : active === "quiz" ? (
      <QuizPage
        questions={quizQuestions}
        index={quizIndex}
        score={score}
        answered={answered}
        complete={quizComplete}
        onAnswer={answerQuestion}
        onNext={nextQuestion}
        onRestart={restartQuiz}
      />
    ) : (
      <HomePage onNavigate={navigate} />
    );

  return (
    <div className="app-shell">
      <SiteHeader active={active} onNavigate={navigate} />
      <main>{page}</main>
      <SiteFooter />
    </div>
  );
}

export default App;
