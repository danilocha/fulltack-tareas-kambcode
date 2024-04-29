import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Encabezado from './components/Encabezado';
import Description from './components/Description';
import Experience from './components/Experience';
import WorkExperience from './pages/workE';
import NoFound from './pages/noFound';
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
            <Link className='readme' to="work-experience">ver mas</Link>
            <Link className='readme' to="/Imagen">My photo</Link>
            
        </ul>       
      </nav>
      <Routes>
      <Route path="/" exact element={App} />
        <Route path='/work-experience' element={<WorkExperience/>}/>
        <Route path='/Imagen' element={<Imagen/>}/>
        <Route path='/*' element={<NoFound/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
