const DUMMY_ROCKETS = [
  {
    id: '1',
    name: 'Starship',
    description:
      'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
    reserved: true,
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

const DUMMY_MISSIONS = [
  {
    mission_id: '1',
    mission_name: 'Starship',
    description:
      'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
    reserved: true,
  },
  {
    mission_id: '2',
    mission_name: 'Starship',
    description:
      'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
    reserved: false,
  },
  {
    mission_id: '3',
    mission_name: 'Starship',
    description:
      'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
    reserved: true,
  },
];

const reservedRockets = DUMMY_ROCKETS.filter(
  (rocket) => rocket.reserved !== true
);
const reservedMissions = DUMMY_MISSIONS.filter(
  (mission) => mission.reserved !== true
);
const MyProfilePage = () => <h2>Hello From MyProfile Page</h2>;

export default MyProfilePage;
