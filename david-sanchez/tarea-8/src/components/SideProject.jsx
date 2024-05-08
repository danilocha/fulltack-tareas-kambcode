import React from "react";
import  { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
function SiteProjects(){
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
    <div className="boxExperience">
      <h1>Repositorios de Kambcode</h1>
      <ul>
        {repos.map((repo) => (
          <li><br />
            <strong>Name:</strong> {repo.name} <br />
            <strong>Description:</strong> {repo.description} <br />
            <strong>Created At:</strong> {repo.created_at} <br />
            <strong>Language:</strong> {repo.language}
          </li>
        ))}
      </ul><Link className='readme' to="/">Go to home</Link>
    </div>
  );
}
export default SiteProjects;