/* eslint-disable react/prop-types */
import React from "react";
import "./Rocket.css";
import { useDispatch, useSelector } from "react-redux";
import { reserveRocket } from "../../redux/rockets/rocketSlice";
function Rocket({ item }) {
  const dispatch = useDispatch();
  const rocketState = useSelector((state) => state.rockets);
  const reserveBtnHandler = () => {
    dispatch(reserveRocket(item.rocket_id));
  };
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
        <button className="rocket__info-btn" onClick={reserveBtnHandler}>
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

export default Rocket;
