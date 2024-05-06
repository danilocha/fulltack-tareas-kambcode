import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import NotFound from "./components/notfound";
import Home from "./components/Home";
import WorkExperience from "./components/workexperience";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>                                                    
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/notfound">NotFound</NavLink>
            </li>
            <li>
              <NavLink to="/workexperience">Work Experience</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/workexperience" element={<WorkExperience />} />
      </Routes>
    </Router>
  );
};

export default App;
