import React from "react";
import "./style.css";

function FaceCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} id={props.id} onClick={props.onClick} src={props.image} clicked={props.isClicked} />
      </div>
    </div>
  );
}

export default FaceCard;
