import React from 'react';
import Header from '../../components/header';
import About from '../../components/sobremi';
import WorkExperience from '../../components/workexperience';
import Navbar from '../../components/menu';
import Web from '../../components/web';
import Gotohome from '../../components/gotohome';
import '../../App.css';



function Nosotros() {
  return (
    <div className='App'>
      <Header/>
      <Navbar/>
      <Gotohome/>
      <About/>
      <WorkExperience/>
      <Web/>
    </div>
  );
}

export default Nosotros;
