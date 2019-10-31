/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Cards.css";

const Clickables = props => (
  <div className="characterBox" onClick={() => props.cardClick(props.id)}>
    
    <img 
          aria-label="click item"
          src={process.env.PUBLIC_URL + props.image}
          className="characters"
    />
  </div>

);

export default Clickables;