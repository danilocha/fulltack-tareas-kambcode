import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contactanos from "./pages/contact";
import Home from "./pages/inicio";
import Nosotros from "./pages/about";
import WorkExperience from "./pages/experience";
import Proyectos from "./pages/proyectos";
import NotFound from "./pages/notFound";
import { ReposProvider } from './components/context/repos'; // Importamos el proveedor del contexto

function App() {
  return (
    <ReposProvider> {/* Aquí envolvemos App con el ReposProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contactenos" element={<Contactanos/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/proyectos" element={<Proyectos/>} />
          <Route path="/work-experience" element={<WorkExperience/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ReposProvider>
  );
}

export default App;
