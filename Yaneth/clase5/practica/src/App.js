
import './App.css';
import Datos from './components/datos/datos';
import Imagen from './components/imagen';
import Parrafos from './components/parrafos';
import Subtitulos from './components/subtitulos';
import Titulo from './components/titulo/Titulos';
import Vinculo from './components/vinculo/vinculo';


;
function App() {
  const perfil = [
    {
      imagen: ("./components/imagen/mujer.jpeg"),
      nombre: "Yaneth Cundar Melo",
      profesion: "Asistente Administrativo",
      direccion: 'calle 13b#17-155 Dosquebrads',
      titulo: "Mi Perfil",
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
    <div className= {App.contenedor}>
      {perfil.map((perfil)=>(
      <>
        <div className="App">
          <div className='fotoDatos'>
            <div className='picture'>
              <Imagen imagenes = {perfil.imagen} />
            </div>
            <div className="datos">
              <Datos texto = {perfil.nombre}/>
              <Datos texto = {perfil.profesion}/>
            </div>
          </div>
          <div className='contenido'>
            <Titulo titulos = {perfil.titulo} />
            <Parrafos parrafo = {perfil.descripcion} />
          </div>
          <div className='experiencia'>
            <Titulo titulos = {perfil.experiencia} />
          </div>
          
          <div className='date'>
            <div>
              <Parrafos parrafo = {perfil.fechaDos} /> 
            </div>
            <div>
              <Subtitulos subtitulo = {perfil.cargo} />
              <Parrafos parrafo = {perfil.empresaUno} />  
              <Parrafos parrafo = {perfil.conocimientos} />
            </div>
          </div>
          <div className='date'>
            <div>
              <Parrafos parrafo = {perfil.fechaDos} /> 
            </div>
            <div>
              <Subtitulos subtitulo = {perfil.cargo} />
              <Parrafos parrafo = {perfil.empresaUno} />
              <Parrafos parrafo = {perfil.conocimientos} />
            </div>
          </div>
          <div className='enlace'>   
            <Vinculo enlace = {perfil.enlace} />
          </div>
        </div> 
      </>
      )
    )
  }
    </div>
)
}

export default App;
