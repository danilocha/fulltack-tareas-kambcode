import React from 'react';
import estiloBiografia from '../../components/biografia/estiloBiografia.module.css'

const Biografia = (props) => {
  const parrafo = props.parrafo
  return (
    <div className= {estiloBiografia.descripcion}>
      <p>{parrafo}</p>
    </div>
  );
}
export default Biografia;

