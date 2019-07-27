import React, { Component } from "react";
import Header from "./components/Header";

import './App.css';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import krustyPals from "./krustyPals.json"

class App extends Component {
  state = {
    response: "Click an image below to begin!",
    score: 0,
    topScore: 0,
    image: "",
    krustyPals: krustyPals,
    trackTop: false,
    play: "Playing"
  };



  setScore = (clicked) => {
    if (this.state.play === "Playing") {
      if (krustyPals[clicked - 1].clicked === "clicked") {
        this.setState({ response: "Sorry No, Gave Over!" })
        this.setState({ play: "Over" })
        alert("1 - " + this.state.play);
      } else {
        alert("2 - " + this.state.play);
        alert("GAME ON!");
        krustyPals[clicked - 1].clicked = "clicked"
        this.setState({ score: this.state.score + 1 }, () => {
          if (this.state.score >= this.state.topScore) {
            this.setState({ topScore: this.state.score });
          }
          this.setState({ response: "CORRECT!!! Keep guessing" })
        });
        //randomize
        let newKrustyPals = [];
        let used = [];
        let newPosi = -1;
        while (used.length < this.state.krustyPals.length) {
          newPosi = Math.floor(Math.random() * 11);
          while (used.indexOf(newPosi) !== -1) {
            newPosi++;
            if (newPosi > 11) newPosi = 0;
          }
          newKrustyPals.push(this.state.krustyPals[newPosi]);
          used.push(newPosi);
        }
        this.setState({ krustyPals: newKrustyPals });
      }
    } else {
      //reset 
      alert("CAR!");
      alert("I'm resetting");
      for (let i = 0; i < krustyPals.length; i++) {
        krustyPals[i].clicked = "Not CLicked";
      }
      this.setState({ score: 0 });
      this.setState({ play: "Playing" })
      this.setState({ response: "CORRECT!!! Keep guessing" })
    }
  }

render() {
  return (
    <Wrapper>
      <Header response={this.state.response} score={this.state.score} topScore={this.state.topScore} />
      {this.state.krustyPals.map(pal => (
        <FriendCard
          setScoreCallBack={this.setScore}
          image={pal.image}
          clicked={pal.clicked}
          id={pal.id}
          name={pal.name}
        />
      ))}
    </Wrapper>
  );
}
}

export default App;
