import { Link, NavLink } from 'react-router-dom';
import styles from './menu.module.css';
import homeIcon from '../images/home.png';
import aboutIcon from '../images/profile.png';
import projectsIcon from '../images/proyectos.png';
import contactIcon from '../images/contacto.png';

function Navbar() {
  return (
    <nav>
      <ul className={styles.navBar}>
        <li className={styles.links}>
          <Link to="/">
            <img className={styles.img} src={homeIcon} alt="Home" /> Home
          </Link>
        </li>
        <li className={styles.links}>
          <NavLink to="/nosotros">
            <img className={styles.img} src={aboutIcon} alt="Sobre mi" /> Sobre mi
          </NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to="/proyectos">
            <img className={styles.img} src={projectsIcon} alt="Proyectos" /> Proyectos
          </NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to="/contactenos">
            <img className={styles.img} src={contactIcon} alt="Contacto" /> Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
