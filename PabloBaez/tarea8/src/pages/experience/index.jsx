import React from 'react';
import Header from '../../components/header';
import About from '../../components/about';
import WorkExperience from '../../components/workexperience';
import Navbar from '../../components/menu';
import Gotohome from '../../components/gotohome';
import '../../App.css';



function WExperience() {
  return (
    <div className='App'>
      <Header/>
      <Navbar/>
      <Gotohome/>
      <About/>
      <WorkExperience/>
    </div>
  );
}

export default WExperience;
