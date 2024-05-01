import React from "react";
function Experience(){
    const DataExperience = [
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
            <h1>Work experience</h1>
            <ul>
                {experienciaItem}
            </ul>
        </div>
      );
};
export default Experience;
