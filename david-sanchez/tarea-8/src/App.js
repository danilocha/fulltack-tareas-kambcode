import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Encabezado from './components/Encabezado';
import Description from './components/Description';
import Experience from './components/Experience';
import WorkExperience from './pages/workE';
import NoFound from './pages/noFound';
import Imagen from './components/Imagen';
import SiteProjects from './components/SideProject';
import GitHubProjectsContextProvider from './context/contextProvider';
import  { useEffect, useState } from 'react';
import NameSiteProjects from './components/nameSiteProject';


function App() {
  const [repos, setRepos] = useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/kambcode/repos")
      .then((response) => response.json())
      .then((result) => {
        // Filtramos los datos que necesitamos de cada repositorio
        const filteredRepos = result.map((repo) => ({
          name: repo.name,
          description: repo.description,
          created_at: repo.created_at,
          language: repo.language
        }));
        setRepos(filteredRepos);
      })
      .catch((error) => {
        console.error('Ops hay un error:', error);
      });
    }, []);
  return (
    <GitHubProjectsContextProvider  initialValue={repos}>
      <Router>
        <div>
          <Encabezado/>
          <Description/>
          <Experience/>
          <nav>
            <ul>
                <Link className='readme' to="work-experience">Ver mas</Link>
                <Link className='readme' to="/Imagen">My photo</Link>
                <Link className='readme' to="/siteProjects">Site Projects</Link>
                <Link className='readme' to="/namesiteProjects">Name Projects</Link>
                
            </ul>       
          </nav>
          <Routes>
          <Route path="/" exact element={App} />
            <Route path='/work-experience' element={<WorkExperience/>}/>
            <Route path='/Imagen' element={<Imagen/>}/>
            <Route path='/*' element={<NoFound/>}/>
            <Route path='/siteProjects' element={<SiteProjects/>}/>
            <Route path='/namesiteProjects' element={<NameSiteProjects/>}/>
          </Routes>
        </div>
      </Router>
    </GitHubProjectsContextProvider>
    
  );
}

export default App;
