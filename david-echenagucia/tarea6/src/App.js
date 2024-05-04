import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Nosotros from "./componentes/nosotros";
import Servicios from "./componentes/servicios";
import Inicio from "./componentes/inicio"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/inicio" element={<Inicio />}/>
        <Route path="/nosotros" element={<Nosotros />}/>
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
}

export default App;
