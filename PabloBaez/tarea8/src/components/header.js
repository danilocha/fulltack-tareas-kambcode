import React from 'react';
import profile from '../data/profile';
import styles from './header.module.css';

function Header() {
  const profileList = profile.map((v) => {
    return (
      <div className={styles.AppH}>
        <img className={styles.profileImg} src={v.image} alt={v.name}/>
        <div className={styles.profileText}>
          <h1 className={styles.title}>{v.name}</h1>
          <div className={styles.container}>{v.description}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {profileList}
    </div>
  );
}

export default Header;
