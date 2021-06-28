import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Start</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Route path="/" component={Home} />
        </section>
      </div>
    </Router>
  );
}

export default App;
