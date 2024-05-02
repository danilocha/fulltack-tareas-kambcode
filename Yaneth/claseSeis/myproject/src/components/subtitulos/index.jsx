import React from "react";
import estilo from './estilo.module.css'



const Subtitulo = (props) => {
    const subtitulos = props.subtitulos
    return(
        <div className={estilo.subtitulo} >
            <h3>{subtitulos}</h3>

        </div>

    )
}
export default Subtitulo;