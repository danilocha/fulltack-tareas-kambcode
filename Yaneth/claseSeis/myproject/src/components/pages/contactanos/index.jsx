import React from "react";
import Card from "../../card";
import estilo from './estilo.module.css'




const Contactanos =()=>{
    return(
        <div className={estilo.estilo} >
            <Card textoTitulo= "Mis medios de contacto:" 
                  textoSubtitulo= "Correo Electronico es ycundar@gmail.com"
                  link={
                    {
                        url: "/",
                        texto: "Volver a Inicio"

                    }
                  } />
        </div>

    )
}
export default Contactanos

