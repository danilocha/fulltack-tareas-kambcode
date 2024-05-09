import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Encabezado from './components/Encabezado';
import Description from './components/Description';
import Experience from './components/Experience';
import WorkExperience from './workE/index'
import NoFound from './noFound/index';
import SiteProjects from './components/SideProject';


function App() {
  return (
    <Router>
    <div className='r5'>
      <Encabezado/>
      <Description/>
      <Experience/>
      <nav>
        <ul>
            <Link className='readme' to="work-experience">ver mas</Link>
            <Link className='readme' to="/siteProjects">Site Projects</Link>

        </ul>       
      </nav>
      <Routes>
      <Route path="/" exact element={App} />
        <Route path='/work-experience' element={<WorkExperience/>}/>
        <Route path='/*' element={<NoFound/>}/>
        <Route path='/siteProjects' element={<SiteProjects/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;