import React from "react";
import "./style.css";



function Header(props) {
  return (
    <header className="navbar">
      <h1>Clicky Game</h1>
      <h1>{props.response}</h1>
      <h1>Score: {props.score} | Top Score {props.topScore}</h1>   
    </header>

  );
}

export default Header;
