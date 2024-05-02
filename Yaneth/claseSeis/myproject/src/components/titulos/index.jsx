import React from "react";
import estilo from './estilo.module.css'

const Titulo = (props) => {
    const titulos = props.titulos

    return(
        <div className={estilo.titulo} >
            <p>{titulos} </p>
        </div>
    )
}
export default Titulo;