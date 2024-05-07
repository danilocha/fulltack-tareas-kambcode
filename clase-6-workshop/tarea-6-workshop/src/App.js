import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/home";
import Workexperience from "./components/Workexperience";
import Projects from "./components/pages/projects";
import Notfound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/workexperience">Work Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/workexperience" element={<Workexperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/#" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
