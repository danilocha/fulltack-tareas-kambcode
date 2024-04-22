import React from 'react';
import Imagen from './components/imagen';
import Cantante from './components/imagen/Cantante.jpeg';
import Titulo from './components/titulo';
import Biografia from './components/biografia';
import estiloPpal from '../src/estiloPpal.module.css'


function App() {

  const artistas = [
    {
      nombre: "Celia Cruz",
      Descripcion: "Úrsula Hilaria Celia Caridad Cruz Alfonso, conocida artísticamente como Celia Cruz, fue una cantante de salsa cubana y música tropical, una de las cantantes latinas más exitosas del siglo XX, con veintidós álbumes de oro a su nombre, nació en La Habana, Cuba, el 21 de octubre de 1925, falleció en Fort Lee, Nueva Jersey, el 16 de julio del 2003.",
      Genero: " Salsa",
      Imagen: 'https://tse1.mm.bing.net/th?id=OIP.FbCS6r31tauQH3CJQ63tOQHaE7&pid=Api&P=0&h=180'
    },
    {
      nombre: "Rey Ruiz",
      Descripcion: "Reinerio Ruíz Santiago, conocido en el medio artístico como Rey Ruiz es un cantante y compositor cubano. Nació el 21 de junio de 1966 en La Habana, Cuba. Sus fanes lo nombraron El Bombón De La Salsa. ",
      Genero: " Salsa",
      Imagen: 'https://tse3.mm.bing.net/th?id=OIP.aspjnMgXzOLwce7Fe-jiiwHaF1&pid=Api&P=0&h=180'
    },
    {
      nombre: "Joe Arroyo",
      Descripcion: "Nacido y criado en el barrio Nariño de Cartagena, Arroyo comenzó su carrera a muy temprana edad cuando desde los ocho años cantaba en bares y burdeles de Tesca, zona de tolerancia de su ciudad natal. En sus inicios, cantó con agrupaciones como Los Caporales del Magdalena, Manuel Villanueva y su Orquesta y el Supercombo Los Diamantes (las dos últimas en 1970). ",
      Genero: " Salsa",
      Imagen: 'https://tse1.mm.bing.net/th?id=OIP.l2QxeVf5QafXdkU6s-R_fgHaFj&pid=Api&P=0&h=180'
    },
    {
      nombre: "Ruben Blades",
      Descripcion: "Rubén Blades es un abogado, político, humanista, cantante, compositor, músico y actor. Nació el 16 de julio de 1948, en el barrio de San Felipe, Ciudad de Panamá, República de Panamá. Lo que catapultó como artista a Rubén Blades fue su trabajo musical junto al trombonista neoyorquino Willie Colón. ",
      Genero: " Salsa",
      Imagen: 'https://tse4.mm.bing.net/th?id=OIP.QSuTIUf1HCME_eSLzpqMnAHaE8&pid=Api&P=0&h=180'
    }
    
  ];
  return (

    <div className= {estiloPpal.contenedor}>
    {artistas.map((artista)=>(
      <>
      
        <Titulo texto ={artista.nombre} />
        <Imagen imagenes = {artista.Imagen} />
        <Biografia parrafo = {artista.Descripcion} />
      </>

    ))}  
      <Titulo texto ="esto es un titulo"/>
      <Imagen imagenes = {Cantante} />
      <Biografia parrafo = "esto es un parrago con cosas del cantanten"/>
  
  
      <Titulo texto ="Primer titulo"/>
      <Titulo texto ="Segundo titulo"/>
     
    </div>
  );
}

export default App;