import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Notfound() {
  return (
    <>
      <header>
        <h1>Page not found</h1>
      </header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Notfound;
