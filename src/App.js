import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import CorrectGuesses from "./components/CorrectGuesses";
import BestScore from "./components/BestScore";
import FaceCard from "./components/FaceCard";
import image from "./faces.json"

let correctGuesses = 0;
let bestScore = 0;
let imageArray = image;
let clickedArray = [];

shuffule(image);

function shuffule(array) {
  array.sort(() => Math.random() - 0.5);
}

class App extends React.Component {
  //set initial state of game
  state = {
    correctGuesses,
    bestScore,
    clickedArray
  }
  
  handleClick = (event) => {
    event.preventDefault();
    console.log("image clicked: " + event.target.id)

    //create clone of clickedArray to modify
    const clickedImage = this.state.clickedArray
    
    //filter and find if ID has already been clicked
    const clickedImageMatch = clickedImage.filter(match => match.event.target.id === event.target.id)

    //if theres a match the game is over. Reset the game.
    if (event.target.id === clickedImageMatch) {
      console.log("We have a match")
      correctGuesses = 0
      alert("Sorry you already clicked this face. Click a new face to start the game again")

      //resets all images clicked to false
      for (let i = 0; i < clickedImage.length; i++) {
        clickedImage[i] = false;
      }

      //resets states for correctGuesses & clickedImage to blank
      this.setState({correctGuesses});
      this.setState({clickedImage});

    }

  }

  render() {
    return (
      <>
        <Title>CLICK A FACE!</Title>
        <Instructions>Click on a face to gain points! Click on the same one twice and you lose!</Instructions>
        <br />
        <CorrectGuesses>Correct Guesses : {this.state.correctGuesses}</CorrectGuesses>
        <br />
        <BestScore>Best Score : {this.state.bestScore}</BestScore>
        <br />
      
        <Wrapper>
          {imageArray.map( x => (
            <FaceCard
            id={x.id}
            name={x.name}
            image={x.image}
            onClick={this.handleClick}
            isClicked={"false"}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
