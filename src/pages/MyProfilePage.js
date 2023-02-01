import { useSelector } from "react-redux";

import classes from "./MyProfilePage.module.css";

const MyProfilePage = () => {
  const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedMissions = missions.filter(
    (mission) => mission.reserved !== false
  );
  const reservedRockets = rockets.filter((rocket) => rocket.reserved !== false);

  let missionsContent = <p>No Missions Found! Please join a new one!</p>;
  if (reservedMissions.length > 0) {
    missionsContent = reservedMissions.map((mission) => (
      <li key={mission.mission_id}>{mission.mission_name}</li>
    ));
  }

  let rocketsContent = <p>No Rockets Found! Please reserved a new one!</p>;
  if (reservedRockets.length > 0) {
    rocketsContent = reservedRockets.map((rocket) => (
      <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
    ));
  }

  return (
    <section className={classes.my_profile_section}>
      <div className={classes.my_missions}>
        <h3>My Missions</h3>
        <ul className={classes.profile_items}>{missionsContent}</ul>
      </div>
      <div className={classes.my_rockets}>
        <h3>My Rockets</h3>
        <ul className={classes.profile_items}>{rocketsContent}</ul>
      </div>
    </section>
  );
};

export default MyProfilePage;
