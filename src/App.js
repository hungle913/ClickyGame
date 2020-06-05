import React from 'react';
import Wrapper from "./components/Wrapper";
import TopWrap from "./components/TopWrap";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import CorrectGuesses from "./components/CorrectGuesses";
import BestScore from "./components/BestScore";
import FaceCard from "./components/FaceCard";
import image from "./faces.json"

let imageArray = image;

shuffle(image);

function shuffle(array) {
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
    // console.log(event.target);
    event.preventDefault();
    console.log("image clicked: " + event.target.id)
    let clickedID = event.target.id
    // console.log(this.state.clickedArray)

    //if statement to check if id was already clicked. 
    if(this.state.clickedArray.indexOf(clickedID) < 0){
      //Increase correctGuesses score and add ID to clickedArray.
      this.setState((state) => ({
        clickedArray: state.clickedArray.concat([clickedID]),
        correctGuesses: state.correctGuesses + 1,
      }))
      //if statement to check if bestScore is equal to or less than correctGuesses score. 
      if(this.state.bestScore <= this.state.correctGuesses) {
        //Set best score to match correctGuesses score if equal to or less than correctGuesses.
        this.setState((state) => ({
          bestScore: state.bestScore = state.correctGuesses
        }))
      } 
      shuffle(image);
    //if score reaches 12 user has won
    }else if(this.state.correctGuesses > 11)  {
      console.log("correct guesses: " + this.state.correctGuesses)
      alert("YOU WON!!! PLAT AGAIN???")

      this.setState((state) => ({
        clickedArray: [],
        correctGuesses: 0,
        bestScore: 0
      }))
    //if already clicked end game and restart the score
    }else if (this.state.clickedArray.indexOf(clickedID) >= 0){
      alert("Sorry you already guessed that one! Start over!!!")

      this.setState((state) => ({
        clickedArray: [],
        correctGuesses: 0
      }))
    }
  }

  render() {
    return (
      <>
        <TopWrap>
          <Title>CLICK A FACE!</Title>
          <Instructions>Click on a face to gain points. <br /> Click on the same face twice and you lose!</Instructions>
          <br />
          <CorrectGuesses>Correct Guesses : {this.state.correctGuesses}</CorrectGuesses>
          <BestScore>Best Score : {this.state.bestScore}</BestScore>
          <br />
        </TopWrap>
      
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
