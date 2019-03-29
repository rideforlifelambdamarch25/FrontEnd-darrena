import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import DriverRegister from './components/DriverRegister';
import UserRegister from './components/UserRegister';
import DriverLogin from './components/DriverLogin';
import UserLogin from './components/UserLogin'
import PrivateRoute from './components/PrivateRoute';
import DriverListView from './views/DriverListView';
import UserProfileView from './views/UserProfileView';
import DriverProfile from './components/DriverProfile';


import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="nav-bar">
           <h2>Ride for Life</h2>
            <li>
              <NavLink exact to="/" activeClassName="activeNavButton">Home</NavLink>
            </li>
            <li>
              <NavLink to="/user/register" activeClassName="activeNavButton">Rider Signup</NavLink>
            </li>
            <li>
              <NavLink exact to="/driver/register" activeClassName="activeNavButton">Driver Signup</NavLink>
            </li>
            <li>
              <NavLink to="/drivers" activeClassName="activeNavButton">Ride Request</NavLink>
            </li>
            <li>
              <NavLink exact to="/driver/login" activeClassName="activeNavButton">Driver Login</NavLink>
            </li>
          </ul>
          <Route exact path='/' component={Home}/>
          <Route path='/driver/register' component={DriverRegister}/>
          <Route path='/user/register' component={UserRegister}/>
          <Route path='/user/login' component={UserLogin}/>
          <Route exact path='/driver/login' component={DriverLogin}/>
          <Route path='/users' component={UserProfileView}/>
          <Route exact path='/drivers' component={DriverListView}/>
          <Route path='/public' component={DriverListView}/>
          <Route exact path='/driver/profile/:id' component={DriverProfile}/>
          <PrivateRoute exact path='/driver/protected' component={DriverListView} />
        </div>
      </Router>
    );
  }
}

export default App;
