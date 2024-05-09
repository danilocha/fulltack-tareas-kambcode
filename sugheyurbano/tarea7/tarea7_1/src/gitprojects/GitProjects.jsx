import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GitProjects({ title }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/Sughey0803/repos`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div className="git-projects">
      <h2>Sughey Urbano</h2>
      <div className="projects-grid">
      {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="created-at">{new Date(project.created_at).toLocaleDateString()}</div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Language: {project.language}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GitProjects;
