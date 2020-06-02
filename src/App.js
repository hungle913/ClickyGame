import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import CorrectGuesses from "./components/CorrectGuesses";
import BestScore from "./components/BestScore";
// import FaceCard from "./components/FaceCard";
// import friends from "./faces.json";

function App() {
  return (
    <Wrapper>
    <Title>CLICK A FACE!</Title>
    <Instructions></Instructions>
    <CorrectGuesses></CorrectGuesses>
    <BestScore></BestScore>
  </Wrapper>



  );
}

export default App;
