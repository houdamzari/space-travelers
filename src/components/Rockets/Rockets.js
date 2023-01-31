import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Rocket from "../Rocket/Rocket";
function Rockets(props) {
  const rockets = useSelector((state) => state.rockets.rockets);
  console.log(rockets);
  return (
    <section className="rocket__list">
      {rockets.map((item) => (
        <Rocket item={item} key={item.id} />
      ))}
    </section>
  );
}

export default Rockets;
