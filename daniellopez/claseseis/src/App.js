import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contactanos from "./pages/contactanos";
import Home from "./pages/inicio";
import Nosotros from "./pages/nosotros";
import Servicios from "./pages/servicios";
import WorkExperience from "./pages/workExperience/indes";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contactenos" element={<Contactanos/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/work-experience" element={<WorkExperience/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

