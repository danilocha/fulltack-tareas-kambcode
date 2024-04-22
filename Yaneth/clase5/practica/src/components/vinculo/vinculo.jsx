import React from 'react';
import estilo from './estilo.module.css'



const Vinculo = (props)=>{
    const enlace = props.enlace
    
    return(
        <div className={estilo.enlace}>
         
            <a href={ enlace } >Ver más</a>
        </div>   
    )
}

export default Vinculo;





