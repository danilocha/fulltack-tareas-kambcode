import React from "react";
import Reloj from "./componetes/index.js";
import style from './App';

function App() {
  return(
    <div>
      <h1 className={style.container}>Reloj en Tiempo Real</h1>
      <Reloj />
    </div>
  );
}

export default App;