import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/login";
import SignUp from "./Components/signup";
import pickUpVolunteer from "./Components/pickUpVolunteer/pickUpVolunteer";
import volunteerMainPage from "./Components/volunteerMainPage/volunteerMainPage";
import Home from "./Components/ManagerHome/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02"> */}
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}> Log in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/manager"}>Manager</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/pickUp-Volunteer"}>pickUpVolunteer</Link>
                </li>
              </ul>
            {/* </div> */}
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route
                path="/pickUp-Volunteer"
                style={{ width: "1000px" }}
                component={pickUpVolunteer}
              />
              <Route
                path="/volunteer-Main-Page"
                style={{ width: "1000px" }}
                component={volunteerMainPage}
              />
              <Route exact path="/manager" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
