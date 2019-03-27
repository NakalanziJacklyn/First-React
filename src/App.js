import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  redirect
} from "react-router-dom";

// import Router from 'react-router-dom/Route';

import SimpleState from "./Components/Basics/SimpleState";
import Navbar from "./Components/Layout/Navbar";
import Order from "./Components/Layout/Order";
import Login from "./Components/Layout/Login";
import Quality from "./Components/Layout/Quality";
import Pricing from "./Components/Layout/Pricing";
import About from "./Components/Layout/About";
import Register from "./Components/Layout/Register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
             <Navbar />
          <Switch>         
            <Route exact path="/" component={Navbar} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/about/" component={About} />
            <Route exact path="/register/" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/quality" component={Quality} />
            <Route exact path="/Pricing" component={Pricing} />
          </Switch>

          {/* <Slider />  */}
          {/* <SimpleState />  */}
        </div>
      </Router>
    );
  }
}

export default App;
