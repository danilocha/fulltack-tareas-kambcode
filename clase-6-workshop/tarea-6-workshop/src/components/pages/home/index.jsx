import React from "react";
import BasicInfo from "../../BasicInfo"; // Ruta al archivo donde se define BasicInfo
import Rendertext from "../../Rendertext";
import Workexperience from "../../Workexperience";
import Projects from "../projects";
import Notfound from "../NotFound";

function Home() {
  return (
    <div>
      <BasicInfo />
      <Rendertext />
      <Workexperience />
      <Projects />
    </div>
  );
}

export default Home;
