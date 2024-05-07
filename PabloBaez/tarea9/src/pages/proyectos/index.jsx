import React from 'react';
import Header from '../../components/header';
import Proyectos from '../../components/proyectos';
import Navbar from '../../components/menu';
import Gotohome from '../../components/gotohome';
import Web from '../../components/web';
import '../../App.css';



function WExperience() {
  return (
    <div className='App'>
      <Header/>
      <Navbar/>
      <Gotohome/>
      <Proyectos/>
      <Web/>
    </div>
  );
}

export default WExperience;
