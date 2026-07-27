import { useState, useEffect } from "react";

export function Scores() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <>
      <p>
        Current score: <span className="current-score">{score}</span>
      </p>
      <p>
        Best score: <span className="best-score">{bestScore}</span>
      </p>
    </>
  );
}
