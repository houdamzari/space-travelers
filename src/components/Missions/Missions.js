import { useSelector } from 'react-redux';

import classes from './Missions.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);

  let missionsContent = <p>There is No Mission to render</p>;
  if (missions.length > 0) {
    missionsContent = (
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={classes.table_body}>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className={classes.name}>{mission.mission_name}</td>
              <td className={classes.description}>{mission.description}</td>
              <td className={classes.status}>
                {mission.reserved ? (
                  <span>Active Member</span>
                ) : (
                  <span className={classes.not_a_member}>Not A Member</span>
                )}
              </td>
              <td className={classes.actions}>
                {mission.reserved ? (
                  <button className={classes.btn_leavemission} type="button">
                    Leave Mission
                  </button>
                ) : (
                  <button className={classes.btn_join_mission} type="button">
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return <div className={classes.container}>{missionsContent}</div>;
};

export default Missions;