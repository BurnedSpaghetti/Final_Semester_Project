import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Signup from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/" component={LoginPage}/>
        <Route path = "/signup" component={Signup}/>
      </Switch>
    </Router>
  )
}

export default App;
