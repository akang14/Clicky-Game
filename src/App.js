import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import images from "./images.json";

class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ images: this.shuffleCharacters(this.state.images) });
  }

  resetData = images => {
    const resetData = images.map(item => ({ ...item, clicked: false }));
    return this.shuffleCharacters(resetData);
  };

  shuffleCharacters = images => {
    let i = images.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = images[i];
      images[i] = images[j];
      images[j] = temp;
      i--;
    }
    return images;
  };

  correctGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      images: this.shuffleCharacters(newData),
      score: newScore,
      topScore: newTopScore
    });

  };

  incorrectGuess =images => {
    alert("oops, you already picked this one! Your final score is " + this.state.score);
    this.setState({
      images: this.resetData(images),
      score: 0
    });
  };

  cardClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.images.map(characters => {
      const newItem = { ...characters };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.correctGuess(newData)
      : this.incorrectGuess(newData);
  };

  render() {
    return (
      <div>

        <Navbar score={this.state.score} topScore={this.state.topScore} />

        <Header />

        <Container>
          {this.state.images.map(item => (
            <Cards
              key={item.id}
              id={item.id}
              cardClick={this.cardClick}
              image={item.image}
            />
          ))}
        </Container>

        <Footer />

      </div>
    );
  }
}

export default App;