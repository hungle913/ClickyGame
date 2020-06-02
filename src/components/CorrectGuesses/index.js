import React from "react";
import "./style.css";

function CorrectGuesses(props) {
  return <div className="CorrectGuesses">{props.children}</div>;
}

export default CorrectGuesses;
