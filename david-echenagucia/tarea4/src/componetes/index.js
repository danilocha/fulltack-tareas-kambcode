import React, { useState, useEffect } from "react";

function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleDateString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);
  return <p>{hora}</p>;
}

export default Reloj;
