import { Link, Route, BrowserRouter as Router,Routes} from "react-router-dom"
import './App.css';
import Contactanos from './components/pages/contactanos';
import Home from "./components/pages/inicio";
import ExperienciaLaboral from './components/pages/experienciaLaboral/index';
import Prueba from "./components/pages/pruebas";
import NotFound from "./components/pages/notFound";








function App() {
  const perfil = [
    {
      photo: ("./components/imagenes/yaneth.jpeg"),
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
      enlace: "https://www.semana.com/",
      inicioPhoto: ("https://thumbs.dreamstime.com/z/creative-comic-book-style-cartoon-writing-document-original-151148960.jpg")
    }
  ];
  
  return (
  <div className= "App">
    {perfil.map((perfil)=>(
    <div className="App">
      <div className="contenido">
        <div className="imagen"> 
        <img src="./components/imagenes/documento.jpg" alt=""></img>
        </div>
          <div className="rutas">
          <Router>
          <div>
            <nav>
              <ul>
                <div className="enlaces">
                    <div>
                      <li className="enlaces"><Link to="/">Inicio</Link></li>
                    </div>
                    <div>
                      <li><Link to="/contactanos">Contactanos</Link></li>
                    </div>
                    <div>
                      <li><Link to ="/experienciaLaboral">Experiencia Laboral</Link></li>
                    </div>
                    <div>
                      <li><Link to ="/notFound">Not Found</Link></li>
                    </div>
                    <div>
                      <li><Link to ="/pruebas">Prueba</Link></li>
                    </div>
                </div>
                
              </ul>
            </nav>
          </div>
          <div>
            
          </div>        
          <Routes>
                      
              <Route path="/"element={<Home/>} /> 
              <Route path="/contactanos"element={<Contactanos/>} />
              <Route path="/experienciaLaboral" element= {<ExperienciaLaboral/>} />
              <Route path="/pruebas" element= {<Prueba/>} />
              <Route path="/notfound" element= {<NotFound/>} />
          </Routes>
          </Router>
      </div>
    </div> 
      
      </div>
      

))}
  </div>
  )
}
export default App