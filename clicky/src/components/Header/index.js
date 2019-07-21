import React from "react";
import "./style.css";



function Header(props) {
  return (
    <header>
      <p>Clicky Game</p>
      <p>{props.response}</p>
      <p>Score: {props.score} | Top Score {props.topScore}</p>   
    </header>

  );
}

export default Header;
