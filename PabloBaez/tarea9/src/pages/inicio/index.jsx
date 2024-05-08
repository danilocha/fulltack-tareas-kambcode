import React from 'react';
import Header from '../../components/header';
import About from '../../components/about';
import Web from '../../components/web';
import Navbar from '../../components/menu';
import '../../App.css';

function Home() {
  return (
    <div className='App'>
      <Header/>
      <Navbar/>
      <About/>
      <Web/>
    </div>
  );
}

export default Home;
