import React from 'react';
import artistas from '../data/artistas';
import '../App.css';

function Tarjeta() {
  const artistasList = artistas.map((v) => {
    return (
      <div className="App">
        <h1>{v.name}</h1>
        <img src={v.image} alt={v.name}/>
        <div className="container">{v.description}</div>
      </div>
    );
  });

  return (
    <div>
      {artistasList}
    </div>
  );
}

export default Tarjeta;
