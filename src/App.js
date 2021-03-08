import { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import HeroSection from "./Components/HeroSection";
import Home from "./Components/Home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" excat component={Home} />
          <Route path="/products" />
          <Route path="/services" />
          <Route path="/sign-up" />
        </Switch>
      </div>
    </Router>
  );
}
