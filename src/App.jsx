import { useState } from "react";
import { Cards } from "./components/card-section.jsx";
import { Scores } from "./components/scores-section.jsx";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  if (score > bestScore) {
    setBestScore(score);
  }

  if (bestScore === 12) {
    console.log("YOU WIN");
  }

  return (
    <>
      <h1>Project: Memory Card</h1>
      <Scores currentScore={score} bestScore={bestScore}></Scores>
      <Cards handleScore={(n) => setScore(n === 0 ? n : score + 1)}></Cards>
    </>
  );
}

export default App;
