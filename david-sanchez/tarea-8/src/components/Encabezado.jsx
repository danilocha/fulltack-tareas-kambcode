import React from 'react';
import Imagen from '../images/perfil.jpeg';
import '../App.css'

function Encabezado() {
  return (
    <div className='boxEncabezado'>
      <img className='imagen' src={Imagen} alt="Foto del artista" />
      <div>
        <h2 className='colorTitle'>david sanchez</h2>
        <p className='colorTitle'>Full stack Developer</p>
      </div>
    </div>
  );
}

export default Encabezado;