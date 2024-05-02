import React from "react";
import { Link } from "react-router-dom";
import estilo from './enlace.module.css'


const Enlace =(props)=>{
   
    const link= props.link
    return(
        <div className={estilo.enlace}>
        <Link to={link.url}>{link.texto}</Link>
        </div>

    )
}
export default Enlace;
