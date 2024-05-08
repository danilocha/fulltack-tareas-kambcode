import React from 'react';
import WorkExperiences from '../data/workexperience';
import styles from './experience.module.css';


function WorkExperience() {
  const experienceIter = WorkExperiences.map((v) => {
    return (
      <div className={styles.About}>
        <h1 className={styles.title}>"WORKEXPERIENCE"</h1>

        <div className={styles.profileAbout}>
          <div className={styles.col}>
          <div className={styles.date}>{v.date}</div>
          </div>
          
          <div className={styles.job}>
            <div className={styles.title2}>{v.title}</div>
            <div className={styles.order}>Descripción: {v.description}</div>
            <div className={styles.order}>Lenguajes: {v.languages}</div>
            {/* <a href="#">View More</a> */}
          </div>
        </div>
        
      </div>
    );
  });

  return (
    <div>
      {experienceIter}
    </div>
  );
}

export default WorkExperience;
