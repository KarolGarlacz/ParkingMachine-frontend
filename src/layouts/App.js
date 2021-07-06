import "../styles/App.css";
import "../styles/index.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import Consol from "./Consol";
import Button from "./Button";
import Info from "./Info";
import CarInfo from "./CarInfo";

function App() {
  return (
    <Router>
      <div className="app">
        <header>{<Header />}</header>
        <main>
          <section className="main-info">
            {<CarInfo />}
            {<Info />}
          </section>
          <section className="main-consol">
            {<Button />}
            {<Consol />}
          </section>
          <aside>{<Nav />}</aside>
        </main>
      </div>
    </Router>
  );
}

export default App;
