import React from 'react'
import estilos from './estilos.module.css'
const Imagen = (props) => {
    const imagenes = props.imagenes
    const estilosVariables = props.estilos
    // codigo de js 
    return (
        //codigo de html, {}
        <div className={estilos.contenedor} style={estilosVariables}>
            <img src={imagenes} />
        </div>
    )
}

export default Imagen