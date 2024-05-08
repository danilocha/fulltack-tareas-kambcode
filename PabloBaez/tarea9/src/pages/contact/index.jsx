import React from 'react';
import Header from '../../components/header';
import Contacto from '../../components/contacto';
import Navbar from '../../components/menu';
import Web from '../../components/web';
import Gotohome from '../../components/gotohome';
import '../../App.css';



function Contactanos() {
  return (
    <div className='App'>
      <Header/>
      <Navbar/>
      <Gotohome/>
      <Contacto/>
      <Web/>
    </div>
  );
}

export default Contactanos;
