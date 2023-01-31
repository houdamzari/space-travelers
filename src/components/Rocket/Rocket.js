/* eslint-disable react/prop-types */
import React from "react";
import "./Rocket.css";
function Rocket({ item }) {
  console.log(item);
  return (
    <div className="rocket__info">
      <img
        className="rocket__info-image"
        src={item.rocket_images[0]}
        alt="Rocket"
      />
      <div className="rocket__info-details">
        <h4 className="rocket__info-heading">{item.rocket_name}</h4>
        <p className="rocket__info-description">{item.rocket_description}</p>
        <button className="rocket__info-btn">Reserve Rocket</button>
      </div>
    </div>
  );
}

export default Rocket;
