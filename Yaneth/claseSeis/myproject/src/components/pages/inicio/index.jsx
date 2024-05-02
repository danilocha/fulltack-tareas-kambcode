
import Imagen from "../../imagenes";
import Subtitulo from "../../subtitulos";
import Titulo from "../../titulos";
import estilo from "../../pages/inicio/estilo.module.css"



const Home =()=>{
  const perfil = [
    {
      photo: ("../../imagenes/yaneth.jpeg"),
      nombre: "Yaneth Cundar Melo",
      profesion: "Developer",
      direccion: 'calle 13b#17-155 Dosquebrads',
      descripcion: "Desarrollador independiente con experiencia de tres años en la creación de aplicaciones y sitios web que satisfacen las necesidades del cliente. Soy capaz de ofrecer soluciones personalizadas y originales. Mi dominio abarca lenguajes de programación como Ruby, PHP, HTML, JavaScript y CSS. Además, tengo conocimientos intermedios de inglés.",
      experiencia: "Experiencia Laboral",
      fechaUno: "2014 - 2016",
      cargo: "Desarrollador Web - Junior",
      empresaUno:" Tecnologia ZZZZ",
      conocimientos: "Remix, Prisma, Tailwind, Shadcn",
      fechaDos: "2022 - present",
      enlace: "https://www.semana.com/"

    }
  ];

  return (
  <div className= {estilo.contenido}>
    {perfil.map((perfil)=>(
      
    <div>
      <div className = {estilo.contenido}>
          <div className={estilo.datephoto} >
            <div className={estilo.photo} >
              <Imagen imagenes={perfil.photo} />
            </div>
            <div className={estilo.date }>
              <Titulo titulos={perfil.nombre}/>
              <Subtitulo subtitulos={perfil.cargo}/>
            </div>
           
          </div>
          <div className={estilo.enlace}>
              
           

            </div>
        </div>
      </div>
))}
  </div>
  )
}
export default Home;
