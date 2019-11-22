import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignUpPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} />
        <Route path="./SignUp/" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
