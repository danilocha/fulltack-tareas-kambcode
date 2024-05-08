import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import Home from './pages/home';
import Projects from './pages/projects';
import GitHubProjectsContextProvider from './context/contextProvider';
import NotFound from './pages/notFound';

function App() {
  const [githubData, setGithubData] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/danilocha/repos")
        .then((response) => response.json())
        .then((result) => {
            const newResult = result.map(res => {
              return {
                name: res.name,
                description : res.description
              }
            })
            // acá procesamos la respuesta de el endpoint
            setGithubData(newResult); // Resultado de el endpoint
        });
  }, [])
  return (
    <GitHubProjectsContextProvider initialValue={githubData}>
      <Router>
        <Routes>
          <Route path='/' element={ < Home/>} />
          <Route path='/projects' element={ <Projects />} />
          <Route path="*" element={ <NotFound/> } />
        </Routes>
      </Router>
    </GitHubProjectsContextProvider>
  );
}

export default App;
