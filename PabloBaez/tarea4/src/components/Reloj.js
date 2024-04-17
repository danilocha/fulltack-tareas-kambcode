import React, { useState, useEffect } from 'react';
import './Style-r.css';

function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return <p className='lahora'>{hora}</p>;
}

export default Reloj;