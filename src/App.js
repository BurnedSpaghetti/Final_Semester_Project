import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Signup from './pages/SignUpPage';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div projectXs="container-fluid text-center">
          <div projectXs="row justify-content-center">
            <Switch>
              <Route path = "/LoginPage" component ={LoginPage}/>
              <Route path = "/Signup" component = {Signup} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}


/*
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
*/
export default App;
