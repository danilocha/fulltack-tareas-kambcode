import React from "react";
import BasicInfo from "./components/BasicInfo"; // Ruta al archivo donde se define BasicInfo
import Rendertext from "./components/Rendertext";
import Workexperience from "./components/Workexperience"; //
// Define los componentes que deseas mostrar en diferentes rutas.
// Configura las rutas utilizando el componente Router y Routes:

   



function App() {
  return (
    <div>
      <BasicInfo />
      <Rendertext />
      <Workexperience />
    </div>
  );
}





export default App;
