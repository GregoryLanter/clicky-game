import React from "react";
import "./style.css";



function Header(props) {
  return (
    <header className="navbar">
      <h1 id="title">Krusty's Clown Memory</h1>
      <h1 id="response">{props.response}</h1>
      <h1 id="score">Score: {props.score} | Top Score {props.topScore}</h1>   
    </header>

  );
}

export default Header;
