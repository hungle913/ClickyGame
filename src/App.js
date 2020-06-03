import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import CorrectGuesses from "./components/CorrectGuesses";
import BestScore from "./components/BestScore";
// import FaceCard from "./components/FaceCard";
import clicked from "./faces.json";
import image from "./faces.json"

// let correctGuesses = 0;
// let bestScore = 0;
let imageArray = image;

shuffule(image);

function shuffule(array) {
  array.sort(() => Math.random() - 0.5);
}

class App extends React.Component {
  //set initial state of game
  state = {
    clicked,
    correctGuesses: 0,
    bestScore : 0
  }
  

  render() {
    return (
      <Wrapper>
      <Title>CLICK A FACE!</Title>
      <Instructions>Click on a face to gain points! Click on the same one twice and you lose!</Instructions>
      <CorrectGuesses>Correct Guesses : {this.state.correctGuesses}</CorrectGuesses>
      <br />
      <BestScore>Best Score : {this.state.bestScore}</BestScore>
    
      </Wrapper>
    );
  }
}

export default App;
