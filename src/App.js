import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch , redirect} from "react-router-dom";

// import Router from 'react-router-dom/Route';

import SimpleState from "./Components/Basics/SimpleState";
import Navbar from "./Components/Layout/Navbar";
import Slider from "./Components/Layout/Slider";
import Login from "./Components/Layout/Login";
import About from "./Components/Layout/About";
import Register from "./Components/Layout/Register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Route exact path="/about" component={About}/>
          <Route  path="/register" exact render={
            () => {
              return (Register)
            }
          }/>
          <Route path="/login" exact  component={Login}/>
          </Switch> 
        </Router>
        <Navbar />
        {/* <Slider /> */}
        {/* <SimpleState /> */}
        <Login />
        <Register />
        <About />
      </div>
    );
  }
}

export default App;
