import React from "react";



const Datos = (props)=> {
    const texto = props.texto
    return (
        <div className= 'estilo' >
        <h3> {texto} </h3>
        
        </div>  
    )
}
export default Datos;