import { Link, NavLink } from 'react-router-dom';
import styles from './menu.module.css';

function Navbar() {
  return (
    <nav>
      <ul  className={styles.navBar}>
        <li className={styles.links}><Link to="/">Home</Link></li>
        <li className={styles.links}><NavLink to="/nosotros">About</NavLink></li>
        <li className={styles.links}><NavLink to="/contactenos">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
