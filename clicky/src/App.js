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
    clicked: "Not Clicked",
    trackTop: false
  };
  
  

  setScore = (clicked) => {
    if (krustyPals[clicked].clicked === "clicked"){
      this.setState({response: "Sorry No, Gave Over!"})
    }else{
      krustyPals[clicked].clicked = "clicked"
      console.log(krustyPals);
      this.setState({score: this.state.score + 1});
      this.setState({clicked: "clicked"})
      if(this.state.score === this.state.topScore){
        alert("I got here");
        this.setState({trackTop: true});
      }
      this.setState({response: "CORRECT!!! Keep guessing"})  
      if(this.state.trackTop) {
        alert("I got here too");
        this.setState({trackTop: this.state.score});
      }
    }

  } 

  render() {
    return (      
      <Wrapper>
        <Header response={this.state.response} score={this.state.score} topScore={this.state.topScore} />
        {this.state.krustyPals.map(pal => (
          <FriendCard 
            setScoreCallBack = {this.setScore}  
            image = {pal.image}
            clicked = {this.state.clicked}
            id = {pal.id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
