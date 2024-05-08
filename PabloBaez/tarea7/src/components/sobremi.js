import React from 'react';
import About from '../data/sobremi';
import styles from './about.module.css';


function Sobremi() {
  const aboutIter = About.map((v) => {
    return (
      <div className={styles.About}>
        
        <div className={styles.profileAbout}>
        <h1 className={styles.title}>{v.titleAbout}</h1>
        <div className={styles.description}>{v.about}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {aboutIter}
    </div>
  );
}

export default Sobremi;
