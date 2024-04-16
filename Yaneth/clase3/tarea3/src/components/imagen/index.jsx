import React from 'react';
import estiloImagen from '../../components/imagen/estiloImagen.module.css'



const Imagen = (props) => {
  const imagenes = props.imagenes
  return(

    <div className= {estiloImagen.photo}>
      
      <img src= {imagenes}  />
    </div>
  )

}
export default Imagen;