import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contactanos from "./components/contactanos";
import Home from "./components/inicio";
import Nosotros from "./components/nosotros";
import Servicios from "./components/servicios";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/servicios">Nuestros servicios?</Link>
            </li>
            <li>
              <Link to="/contactenos">Contactanos</Link>
            </li>
            <li>
              <Link to="/nosotros">Quienes somos?</Link>
            </li>
            <li>
              <Link to="/">inicio</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contactenos" element={<Contactanos/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/servicios" element={<Servicios/>} />
      </Routes>
    </Router>
  );
};

export default App;

