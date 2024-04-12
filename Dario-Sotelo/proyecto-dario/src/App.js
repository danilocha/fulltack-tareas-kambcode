import silvestre from './images/silvestre.jpeg';
import './App.css';

function App() {
  return (
    <div>
      <h1 className='title'>Silvestre Dangond</h1>
      <img src={silvestre} className="App-logo" alt="logo"/>
      <p className='paragraph'>
      Silvestre Francisco Dangond Corrales (Urumita, 12 de mayo de 1980)2​, es un cantante, compositor, 
      actor y presentador de televisión colombiano. Es considerado como uno de los principales cantantes 
      y compositor del Vallenato de la Nueva Ola.3​4​Silvestre, quien para muchos es "La Voz de Colombia", 
      atribuye sus talentos a su padre, el cantante William José "El Palomo" Dangond Baquero, quien a 
      mediados de la década de los 1950, produjo 10 sencillos con Andrés "El Turco" Gil;5​ y su madre, 
      quien proviene de una familia musical y le transmitió su carácter carismático, mientras que desempeñó 
      un papel importante en su educación formal y personal.
      Para ayudarlo a perseguir su anhelo de una trayectoria musical, su familia se trasladó a la ciudad de Bogotá. Allí comenzó a presentarse en fiestas con su gran amigo y acordeonista "Coco" Zuleta.6​
      </p>
    </div>
  );
}

export default App;