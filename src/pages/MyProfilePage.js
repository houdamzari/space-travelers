import { useSelector } from 'react-redux';

import classes from './MyProfilePage.module.css';

const DUMMY_ROCKETS = [
  {
    id: '1',
    name: 'Starship',
    description:
      'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
    reserved: false,
  },
  {
    id: '2',
    name: 'Starship',
    description:
      'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
    reserved: true,
  },
  {
    id: '3',
    name: 'Starship',
    description:
      'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
    reserved: true,
  },
];

const MyProfilePage = () => {
  const missions = useSelector((state) => state.missions.missions);

  const reservedMissions = missions.filter(
    (mission) => mission.reserved !== false
  );
  const reservedRockets = DUMMY_ROCKETS.filter(
    (rocket) => rocket.reserved !== false
  );

  let missionsContent = <p>No Missions Found! Please join a new one!</p>;
  if (reservedMissions.length > 0) {
    missionsContent = reservedMissions.map((mission) => (
      <li key={mission.mission_id}>{mission.mission_name}</li>
    ));
  }

  let rocketsContent = <p>No Rockets Found! Please reserved a new one!</p>;
  if (reservedRockets.length > 0) {
    rocketsContent = reservedRockets.map((rocket) => (
      <li key={rocket.id}>{rocket.name}</li>
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
