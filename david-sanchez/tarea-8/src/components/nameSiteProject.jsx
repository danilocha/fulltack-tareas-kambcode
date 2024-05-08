import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import GitHubProjectsContext from '../context/index'

function NameSiteProjects(){
    const {data} = useContext(GitHubProjectsContext);
  return (
    <div className="boxExperience">
      <h1>Solo nombre de los repositorios de Kambcode</h1>
      {data.length > 0 && data.map((element)=>(
        <li>
        <strong>{element.name}</strong>
        </li>
      ))}
      <Link className='readme' to="/">Go to home</Link>
    </div>
  );
}
export default NameSiteProjects;