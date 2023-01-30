import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/space-travelers.png';
import classes from './Header.module.css';

const Header = () => (
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
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/my-profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
