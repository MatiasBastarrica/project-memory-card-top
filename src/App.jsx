import { useState, useEffect } from "react";
import { Cards } from "./components/card-section.jsx";
import { Scores } from "./components/scores-section.jsx";

import "./App.css";

function App() {
  return (
    <>
      <h1>Project: Memory Card</h1>
      <Scores></Scores>
      <Cards></Cards>
    </>
  );
}

export default App;
