import React, { useState, useEffect } from 'react';
import styles from './web.module.css';

function Web() {

  const [year, setYear] = useState(new Date().getFullYear());

 
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <div  className={styles.web}>
    <p>Todos los derechos reservados {year}</p>
    </div>
  );
}

export default Web;
