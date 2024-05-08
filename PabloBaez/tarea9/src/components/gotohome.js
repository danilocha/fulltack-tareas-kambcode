import { Link } from 'react-router-dom';
import styles from './gotohome.module.css';

function Gotohome() {
  return (
    <nav>
      <ul  className={styles.navBar}>
        <li className={styles.linksG}><Link to="/">&larr; Go to Home</Link></li>
      </ul>
    </nav>
  );
}

export default Gotohome;
