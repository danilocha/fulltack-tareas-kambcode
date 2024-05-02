
import React from "react";
import Titulo from "../../titulos";
import Subtitulo from "../../subtitulos";
import estilo from './estilo.module.css'
import Parrafo from "../../parrafos";



const GitProject =(fecha, empresa,cargo,funciones)=>{
        const myExperiencia = [
          {
            nombreTitulo: "Experiencia Laboral",
            fecha: "Enero-2021 - Julio-2022",
            empresa: "REGISTRADURIA NACIONAL DEL ESTADO CIVIL",
            cargo: "Auxiliar Administrativo",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit quis cumque fuga sapiente dolorem repellat cum, sit officia at nesciunt, sequi deleniti placeat quibusdam sed recusandae corrupti ab? Corporis!" ,
            lenguajes: "HMTL,CSS, JavaScript",
          },
          {
            fecha: "Enero-2021 - Julio-2022",
            empresa: "REGISTRADURIA NACIONAL DEL ESTADO CIVIL",
            cargo: "Auxiliar Administrativo",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit quis cumque fuga sapiente dolorem repellat cum, sit officia at nesciunt, sequi deleniti placeat quibusdam sed recusandae corrupti ab? Corporis!" ,
            lenguajes: "HMTL,CSS, JavaScript"
          },
          {
            fecha: "Enero-2021 - Julio-2022",
            empresa: "REGISTRADURIA NACIONAL DEL ESTADO CIVIL",
            cargo: "Auxiliar Administrativo",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit quis cumque fuga sapiente dolorem repellat cum, sit officia at nesciunt, sequi deleniti placeat quibusdam sed recusandae corrupti ab? Corporis!" ,
            lenguajes: "HMTL,CSS, JavaScript"
          }
        ];
        
    return(
      <div className={estilo.contenido} >
      {myExperiencia.map((myExperiencia)=>(
        
        <div >
          <div className={estilo.tituloExperiencia}>
            <Titulo titulos={myExperiencia.nombreTitulo}/> 
          </div>
          <div className={estilo.experiencia}>
            <div className={estilo.fecha} >  
              <p>{fecha= myExperiencia.fecha} </p>
            </div>
            <div> 
              <Parrafo parrafo={myExperiencia.empresa}/>                      
              <Subtitulo subtitulo={myExperiencia.cargo}/>
              <Parrafo parrafo={myExperiencia.descripcion}/>
              <Parrafo parrafo={myExperiencia.lenguajes}/>
            </div>
          </div>

          
        </div>
      ))}
      </div>
  )
}
export default GitProject;