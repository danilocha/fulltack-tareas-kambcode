import React from "react";

const Workexperience = () => {
  const roles = [
    "2024    - Regional Ecommerce Specialist",
    "2023     - Digital Marketing Coordinator",
    "2022     - Digital Products Markerting lead",
  ];

  return (
    <div>
      <h3>Work Experience</h3>
      <ul>
        {roles.map((rol, index) => (
          <li key={index}>{rol}</li>
        ))}
      </ul>
    </div>
  );
};

export default Workexperience;
