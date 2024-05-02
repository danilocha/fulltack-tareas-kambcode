import React from "react";
import { Link } from "react-router-dom";


const Card =(props)=>{
    const textoTitulo= props.textoTitulo
    const textoSubtitulo=props.textoSubtitulo
    const link= props.link
    return(
        <div>
        <h1>{textoTitulo} </h1>
        <p>{textoSubtitulo} </p>
        <Link to={link.url}>{link.texto}</Link>
        </div>

    )
}
export default Card
