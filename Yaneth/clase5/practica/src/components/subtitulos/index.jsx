import React from "react";
import estiloST from './estiloST.css'



const Subtitulos = (props) => {
    const subtitulo = props.subtitulo
    return(
        <div className={estiloST.subtitulo} >
            <h3>{subtitulo} </h3>

        </div>

    )
}
export default Subtitulos;