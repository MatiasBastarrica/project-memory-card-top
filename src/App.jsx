import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { CardsSection } from "./components/CardsSection.jsx";

function App() {
  return (
    <>
      <h1>Project: Memory Card Zelda edition</h1>
      <CardsSection></CardsSection>
    </>
  );
}

export default App;
