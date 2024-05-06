import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contactanos from "./pages/contact";
import Home from "./pages/inicio";
import Nosotros from "./pages/about";
import WorkExperience from "./pages/experience";
import NotFound from "./pages/notFound";

// import Header from './components/header';
// import About from './components/about';
// import WorkExperience from './components/workexperience';
// import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contactenos" element={<Contactanos/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/work-experience" element={<WorkExperience/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
