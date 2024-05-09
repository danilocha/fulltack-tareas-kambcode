import React from "react";
import { Link } from "react-router-dom";
function WorkExperience(){
    const DataExperience = [
        {
          date: "2022 - present",
          title: "Senior Frontend Engineer - IYK",
          description: "Building the Whole Wide World",
          languages: "Remix • Prisma • Tailwind • Shadcn"
        },
        {
          date: "2014 - 2016",
          title: "Front End Engineer – Neverbland",
          description: "Part of a tight-knit team of designers...",
          languages: "React • Redux • CSSModules • Three.js"
        },
        {
            date: "2014 - 2016",
            title: "Front End Engineer – Neverbland",
            description: "Part of a tight-knit team of designers...",
            languages: "React • Redux • CSSModules • Three.js"
        },
        {
            date: "2014 - 2016",
            title: "Front End Engineer – Neverbland",
            description: "Part of a tight-knit team of designers...",
            languages: "React • Redux • CSSModules • Three.js"
        },
        {
            date: "2022 - present",
            title: "Senior Frontend Engineer - IYK",
            description: "Building the Whole Wide World",
            languages: "Remix • Prisma • Tailwind • Shadcn"
        }
      ];
      const experienciaItem = DataExperience.map((item)=>
      <li>
        <h3>{item.date}</h3>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>{item.languages}</p>
      </li>
      )
      return(
        <div className="boxExperience">
            <h1>My experience Work</h1>
            <ul>
                {experienciaItem}
            </ul>
            <Link className='readme' to="/">Go to home</Link>
        </div>
      );
};
export default WorkExperience;