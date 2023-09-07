// import { useState } from 'react'
import DirectionButton from "./components/DirectionButtons";
import "./App.css";
import ColorButton from "./components/ColorButton";
import GenerateButton from "./components/GenerateButton";

function App() {
  return (
    <>
      <DirectionButton />
      <ColorButton />
      <GenerateButton />
    </>
  );
}

export default App;
