import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/space-travelers.png";
import classes from "./Header.module.css";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <div className={classes.logo_img}>
            <img src={logo} alt="Space Travlers" />
          </div>
          <div className={classes.logo_txt}>
            <Link to="/">
              <h1>Space Travelers&apos; Hub</h1>
            </Link>
          </div>
        </div>
        <ul className={classes.nav_items}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
