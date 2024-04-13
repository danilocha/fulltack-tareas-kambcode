import React from 'react';
import Imagen from './components/imagen';
import Titulo from './components/titulo';

const app = () => { 
  const artistas = [
    {
      nombre: "artista 1",
      descripcion: "es un cantante",
      imagen: "https://urgenciesveterinaries.com/wp-content/uploads/2023/09/survet-gato-caida-pelo-01.jpeg"
    },
    {
      nombre: "jaime",
      estilosVariables: {
        backgroundColor: 'red'
      },
      descripcion: "es un actor",
      imagen: "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-gatos-se-protegen-contra-las-plagas-de-insectos-al-danar-ciertas-plantas/9621844-10-esl-MX/Los-gatos-se-protegen-contra-las-plagas-de-insectos-al-danar-ciertas-plantas.jpg"
    },
    {
      nombre: "artista 3",
      descripcion: "es una modelo",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt4DP14LgK9HVKxqO7HBQiALMMPv4ttnhw7NWSv4qjSZ-4EArHO_PtDv7_m-p6MlRboOo&usqp=CAU"
    }
  ]
  return (
    <>
      {artistas.map((artista) => (
        <>
          <Titulo texto={artista.nombre} />
          <Imagen imagenes={artista.imagen} estilos={artista.estilosVariables} />
          <p> lorem esto es un parrafo muy largo </p>
        </>
      ))}
    </>
  )
}

export default app;