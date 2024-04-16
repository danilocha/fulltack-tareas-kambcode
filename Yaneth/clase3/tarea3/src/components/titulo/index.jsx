import React from 'react';
import estilo from '../../components/titulo/estilo.module.css'

const Titulo = (props) =>{
  const texto = props.texto
  return (

    <div className= {estilo.titulo}>
      <h1>{texto}</h1>
    </div>
  )
  
}

export default Titulo;