import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SimpleState from "./Components/Basics/SimpleState";
import Navbar from "./Components/Layout/Navbar";
import Slider from "./Components/Layout/Slider";
import Pages from "./Components/Layout/Pages";
import About from "./Components/Layout/About";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Route exact path="/" component={Slider}/>
          <Route exact path="/about" component={About}/>
          </Switch>
        </Router>
        <Navbar />
        {/* <Slider /> */}
        {/* <SimpleState /> */}
        <Pages />
        <About />
      </div>
    );
  }
}

export default App;
