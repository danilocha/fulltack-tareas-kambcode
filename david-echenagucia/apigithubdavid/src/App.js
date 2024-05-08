import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import GitHubProjectsContextProvider from "./components/context/contextProvider";
import Projects from "./components/projects";
import Home from "./components/home/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [gitHubData, setgitHubDataG] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/davidleon220/repos")
      .then((response) => response.json())
      .then((result) => {
        const newResult = result.map((res) => {
          return {
            name: res.name,
            description: res.description,
          };
        });
        setgitHubDataG(newResult);
      });
  }, []);
  return (
    <>
      <GitHubProjectsContextProvider initialValue={gitHubData}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </GitHubProjectsContextProvider>
      <div>hola mundo</div>
    </>
  );
}

export default App;
