import React from 'react';
import GitProjects from './gitprojects/GitProjects';
import './miestilo/styles.css';

function App() {
  return (
    <div className="App">
      <h1>Mi Portafolio</h1>
      <div className=" Experiencia Laboral">
      <GitProjects title="Proyectos en GitHub" />
      </div>
    </div>
  );
}

export default App;


