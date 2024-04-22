import React from "react";
import estiloP from './estiloP.css';

const Parrafos =(props)=>{
    const parrafo = props.parrafo
    return(
        <div className={estiloP.estiloP}>
            <p >{parrafo}</p>
        </div>

    )
}
export default Parrafos;