import React from "react";
import Card from "../../card";
import estilo from './estilo.module.css'


const Prueba=()=>{
    return(

        <>
        <div className={estilo.estilo} >
        <Card textoTitulo= "Estoy pendiente." textoSubtitulo="" link={
            {
                url: "/",
                texto: "Volver a inicio"
            }
        } />
        
        </div>
        </>
    )
}
export default Prueba;