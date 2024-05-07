import React, {  } from 'react';
import { useRepos } from './context/repos';
import styles from './experience.module.css';

function WorkExperience() {
  const repos = useRepos(); 

  const experienceIter = repos.map((repo, index) => {
    return (
      <div className={styles.About} key={index}>
        <h1 className={styles.title}>Repositorios de: {repo.owner.login}</h1>
        <div className={styles.profileAbout}>
          <div className={styles.col}>
            <div className={styles.date}>Fecha de Creación: {repo.created_at}</div>
            <div className={styles.date}>Fecha de Actualización: {repo.updated_at}</div>
          </div>
          <div className={styles.job}>
            <div className={styles.title2}>{repo.name}</div>
            <div className={styles.order}>Descripción: {repo.description}</div>
            <div className={styles.order}>Lenguaje: {repo.language}</div>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver más</a>
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
