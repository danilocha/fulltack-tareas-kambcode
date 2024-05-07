import React from "react";

const Projects = () => {
  const roles = [
    "2024     - Regional Ecommerce Specialist",
    "2023     - Digital Marketing Coordinator",
    "2022     - Digital Products Markerting lead",
  ];

  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {roles.map((rol, index) => (
          <li key={index}>{rol}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
