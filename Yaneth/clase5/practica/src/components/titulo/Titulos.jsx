import React from "react";
import estilo from './estiloTitulo.module.css'



const Titulo = (props) => {
    const titulos = props.titulos
    return(
        <div className={estilo.estiloTitulo} >
            <h2>{titulos} </h2>

        </div>

    )
}
export default Titulo;
