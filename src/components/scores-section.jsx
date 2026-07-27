import { useState, useEffect } from "react";

export function Scores({ currentScore, bestScore }) {
  return (
    <>
      <p>
        Current score: <span className="current-score">{currentScore}</span>
      </p>
      <p>
        Best score: <span className="best-score">{bestScore}</span>
      </p>
    </>
  );
}
