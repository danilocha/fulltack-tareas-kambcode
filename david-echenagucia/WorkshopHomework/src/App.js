import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./style.css";
import NameDescription from "./componentes/nameDescription/index.jsx";
import WorkExperience from "./componentes/pg/workExperience/index.jsx";
import About from "./componentes/pg/about/index.jsx";
import Projects from "./componentes/pg/projects/projects.js";
import Networks from "./componentes/pg/networks/networks.js";
import NotFound from "./componentes/pg/notfound/notfound.js";
import Home from "./componentes/pg/home/home.js";

function App() {
  const experience = [
    {
        date: "04-2023 | 10-2023 Lima, Peru",
        title: "Wordpress Developler",
        description: "E-commerce Platform Developer using the Divi plugin. Editor and builder of web pages. Configuration and code improvements resulting in a 90% reduction in website crashes.",
        languages: "N/A",
    },
    {
        date: "12-2021 | 12-2023 Florida, EE.UU",
        title: "Junior Agricultural Data Analyst",
        description: "Automation of data loading and analysis. Tickets management. Help Desk. Technical Support. Creation of statistics to enhance crop tracking. Identify and resolve issues. 30% reduction in data leakage.",
        languages: "N/A",
    },
    {
        date: "07-2022 | 07-2023 Florida, EE.UU",
        title: "CRM Lead Data Cleaning (B2B)",
        description: "Creation of an automated system for lead qualification. Team management. Expansion of potential client base by 20%. Identifying and resolving issues related to lead duplication in Odoo. Creation/modification/deletion of leads in Odoo.",
        languages: "N/A",
        
    }
]
  return (
    <>
     <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home" className="home1"> Home</Link>
                <Link to="/projects" className="networks2"> Projects </Link>
                <Link to="/networks" className="project"> Networks </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/networks" element={<Networks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <NameDescription />
      <About />
      <WorkExperience experience={experience}/>
    </>
  );
}

export default App;
