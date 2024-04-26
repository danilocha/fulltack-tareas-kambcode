import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../inicio';
import About from '../about';
import NotFound from '../notfoud';


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
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/NotFound">NotFound</Link>
            </li>
            <Home />
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};
export default Work