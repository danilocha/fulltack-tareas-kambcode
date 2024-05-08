import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NotFound from './components/pages/notfoud';
import Experience from './components/experience/index.jsx';
import App from './components/pages/inicio';
import './App.css';
import './components/estilos/experience.module.css'


const Work = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/experience">Acerca de</Link>
            </li>
            <li>
              <Link to="/NotFound">NotFound</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};
export default Work