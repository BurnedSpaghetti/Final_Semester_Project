import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignUpPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/SignUpPage" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
