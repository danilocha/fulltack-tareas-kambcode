import React from 'react';

// Componente para información general
const GeneralInfo = ( picture_url, name, description ) => {
  return (
    <div>
      <table>
      <tr>
        <td><img src="https://img.freepik.com/foto-gratis/joven-empresaria-gafas_329181-11694.jpg" alt='Foto' width="120" height="120"/></td>
        <td><center>
      <h1>Sughey Urbano M.</h1>
      <p>Ingeniero de Sistemas</p>
      </center> </td>
      </tr>
      </table>
      

     
    </div>
  );
};

// Componente para renderizar tu perfil
const Profile = (title, description ) => {
  return (
    <div>
      <h2>Ingeniero de Sistemas</h2>
      <p>Profesional, con más de 10 años de experiencia, especializado en análisis de aplicaciones. 
          Capacitado en diseño, desarrollo, implementación y mantenimiento de sistemas informáticos. 
          Líder en proyectos completos de desarrollo de software, asegurando la entrega puntual y la
          calidad del producto final. Aplicación de metodologías ágiles como Scrum y habilidades 
          técnicas en lenguajes de programación como HTML, CSS, JavaScript, SQL y Microsoft Access. 
          En actualización y aprendizaje continuo, trabajo en equipo multidisciplinario y bajo presión, 
          responsable, proactivo, enfocado en comprender las necesidades del usuario final y 
          traducirlas en soluciones tecnológicas efectivas, adaptación a los cambios, excelente en las
           relaciones interpersonales.</p>
    </div>
  );
};

// Componente para renderizar un listado de items
const ExperienceList = ( title, items ) => {
  return (
    <div>
      <center><h2>Experiencia Laboral</h2></center>
      <ul>
          <li key='Finding Technology Company'>
          <h2>Finding Technology Company</h2>
            <h3>abr. 2023 - ene. 2024</h3>
            <h4>Analista de requisitos</h4>
            <p>Analizar requisitos de software para proyectos con las empresas Esfera (para el Ministerio
             de Vivienda) e Iptotal (para Emcali Energía), participando en la creación de historias de 
             usuario y seguimiento en Mural. 
             • Cumplir con el Liderazgo en conceptualización y desarrollo de soluciones tecnológicas, 
             coordinando reuniones con Product Owners para clarificar requisitos. 
             • Asegurar entrega oportuna y calidad del producto final mediante metodologías ágiles como Scrum,
              supervisando la estructura temática en Microsoft Azure. 
             • Trabajar con equipos de desarrollo y stakeholders para garantizar alineación y comunicación 
             efectiva.
             • Cumplir como responsable del mantenimiento continuo y mejora de aplicaciones, identificando 
             oportunidades para optimizar funcionalidad y eficiencia.</p>
             </li>
        
      </ul>
    </div>
  );
};

// Componente principal del portafolio
const Portfolio = () => {
  // Datos simulados para cada componente
  const generalInfoData = {
    picture_url: 'https://img.freepik.com/foto-gratis/joven-empresaria-gafas_329181-11694.jpg',
    name: 'Sughey Urbano M.',
    description: 'FullStack DeveloperIngeniero de Sistemas'
  };

  const profileData = {
    title: 'Ingeniero de Sistemas',
    description: 'Profesional, con más de 10 años de experiencia, especializado en análisis de' 
    };

  const experienceListData = {
    title: 'Experiencia Laboral',
    items: [
      {
        date: 'abr. 2023 - ene. 2024',
        title: 'Analista de requisitos',
        description: 'Analizar requisitos de software para proyectos con las empresas Esfera (para el Ministerio',
        
        
      },
      {
        date: '2014 - 2016',
        title: 'Front End Engineer - Neverbland',
        description: 'Parte de un equipo unido de diseñadores...',
        languages: 'React • Redux • CSSModules • Three.js'
      }
    ]
  };

  return (
    <div>
      <GeneralInfo {...generalInfoData} />
      <Profile {...profileData} />
      <ExperienceList {...experienceListData} />
    </div>
  );
};

export default Portfolio;

