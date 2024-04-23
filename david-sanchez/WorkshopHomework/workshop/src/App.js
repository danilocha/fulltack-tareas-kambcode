import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Encabezado from './components/Encabezado';
import Description from './components/Description';
import Experience from './components/Experience';
import About from './components/About';
import Readmore from './components/Readmore';
import Imagen from './components/Imagen';


function App() {
  return (
    <Router>
    <div>
      <Encabezado/>
      <Description/>
      <Experience/>
      <nav>
        <ul>
            <Link className='readme' to="/Readmore">readmoreee</Link>
            <Link className='readme' to="/About">Aboutt</Link>
            <Link className='readme' to="/Imagen">My photo</Link>
        </ul>       
      </nav>
      <Routes>
        <Route path='Readmore' element={<Readmore/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Imagen' element={<Imagen/>}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
