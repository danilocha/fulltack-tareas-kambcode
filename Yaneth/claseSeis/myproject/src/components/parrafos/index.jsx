import React from "react";
import estilo from './estilo.module.css'

const Parrafo=(props)=>{
    const parrafos = props.parrafo
    return(
        <div className={estilo.parrafo}>
            <p >{parrafos}</p>
        </div>

    )
}
export default Parrafo;