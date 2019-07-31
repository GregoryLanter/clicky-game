  import React, { Component } from "react";
  import Header from "./components/Header";
  
  import './App.css';
  import FriendCard from "./components/FriendCard";
  import Wrapper from "./components/Wrapper";
  import krustyPals from "./krustyPals.json"
  
  class App extends Component {
  
    state = this.initialState;
    get initialState() {
      return {
        response: "Click an image below to begin!",
        score: 0,
        topScore: 0,
        krustyPals: krustyPals,
        display: krustyPals,
        clicked: ["Not Clicked", "Not Clicked", "Not Clicked", "Not Clicked", "Not Clicked", "Not Clicked", "Not Clicked", "Not Clicked", "Not Clicked", "Not Clicked", "Not Clicked", "Not Clicked"],
        play: "Playing"
      }
    }
  
    resetBuilder() {
      this.setState(this.initialState);
    }
  
  
    setScore = (clicked) => {
  
      if (this.state.play !== "Playing") {
        let tempTopScore = this.state.topScore;
        this.resetBuilder();
        //      this.resetClicked();
        this.setState({ topScore: tempTopScore, response: "Click an image to begin!" });
      } else {
  
        if (this.state.clicked[clicked - 1] === "Clicked") {
          this.setState({ response: "Sorry No, Gave Over!" })
          this.setState({ play: "Over" })
        } else {
          let newPalObj = this.state.krustyPals;
          let newClickedArr = this.state.clicked;
          for (let pal = 0; pal < 12; pal++) {
            if (pal === (clicked - 1)) {
              newPalObj[pal].clicked = "Clicked";
              newClickedArr[pal] = "Clicked"
            } else {
              newPalObj[pal].clicked = this.state.clicked[newPalObj[pal].id - 1];
            }
          }
          this.setState({ display: newPalObj });
          this.setState({ clicked: newClickedArr });
  
          this.setState({ score: this.state.score + 1 }, () => {
            if (this.state.score >= this.state.topScore) {
              this.setState({ topScore: this.state.score }, () => {
                if(this.state.score === 12){
                  console.log("Winner");
                  this.setState({response: "YOU WIN!!!"}, () => {
                    this.setState({play: "Over"});
                  });
                }
              });
            }
            this.setState({ response: "CORRECT!!! Keep guessing" });
          });


          //randomize
          let newDisplay = [];
          let used = [];
          let newPosi = -1;
          while (used.length < this.state.display.length) {
            newPosi = Math.floor(Math.random() * 11);
            while (used.indexOf(newPosi) !== -1) {
              newPosi++;
              if (newPosi > 11) newPosi = 0;
            }
            newDisplay.push(this.state.display[newPosi]);
            used.push(newPosi);
          }
          this.setState({ display: newDisplay });
        }
      }
    }
  
  
    render() {
      return (
        <Wrapper>
          <Header response={this.state.response} score={this.state.score} topScore={this.state.topScore} />
          {this.state.display.map(pal => (
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
  
