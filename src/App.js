//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import wire from "./wire.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    wire,
    clickedCharacter: [],
    score: 0
  };

//when you click on a card ... the character is taken out of the array
  imageClick = event => {
    const currentCharacter = event.target.alt;
    const AlreadyClicked =
      this.state.clickedCharacter.indexOf(currentCharacter) > -1;

//if you click on a character that has already been selected, the game is reset and cards reordered
    if (AlreadyClicked) {
      this.setState({
        wire: this.state.wire.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacter: [],
        score: 0
      });
        alert("If you come at the king, you best not miss! Try again.");

//if you click on an available character, your score is increased and cards reordered
    } else {
      this.setState(
        {
          wire: this.state.wire.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacter: this.state.clickedCharacter.concat(
            currentCharacter
          ),
          score: this.state.score + 1
        },
//if you get all 12 characters corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              wire: this.state.wire.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacter: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.wire.map(character => (
            <Cards
              imageClick={this.imageClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;