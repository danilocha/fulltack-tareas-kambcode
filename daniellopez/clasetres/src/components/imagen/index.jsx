import React from 'react'
import estilos from './estilos.module.css'
const ImagenComponent = (props) => {
    console.log(props)
    const artista = props.artista
    // codigo de js 
    return (
        //codigo de html, {}
        <div className={estilos.contenedor} style={artista.estilos}>
            <img src={artista.imagen} />
        </div>
    )
}

export default ImagenComponent