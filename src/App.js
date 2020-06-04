import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import CorrectGuesses from "./components/CorrectGuesses";
import BestScore from "./components/BestScore";
import FaceCard from "./components/FaceCard";
import image from "./faces.json"

let imageArray = image;

shuffule(image);

function shuffule(array) {
  array.sort(() => Math.random() - 0.5);
}

class App extends React.Component {
  //set initial state of game
  state = {
    correctGuesses: 0,
    bestScore: 0,
    clickedArray: []
  }
  
  handleClick = (event) => {
    console.log(event.target);
    event.preventDefault();
    console.log("image clicked: " + event.target.id)
    let clickedID = event.target.id

    //create clone of clickedArray to modify
    // const clickedImage = this.state.clickedArray

    var newArray = this.state.clickedArray.concat(clickedID);
    this.setState({ clickedArray: newArray })
    console.log(this.state.clickedArray)

    
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
