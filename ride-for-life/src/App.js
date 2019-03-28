import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
          <Route exact path='/' component={Home}/>
          <Route exact path='/driver/register' component={DriverRegister}/>
          <Route path='/user/register' component={UserRegister}/>
          <Route path='/user/login' component={UserLogin}/>
          <Route exact path='/driver/login' component={DriverLogin}/>
          <Route path='/users' component={UserProfileView}/>
          <Route exact path='/drivers' component={DriverListView}/>
          <Route path='/public' component={DriverListView}/>
          <Route exact path='/driver/:id' component={DriverProfile}/>
          <PrivateRoute path='/driver/protected' component={DriverListView} />
        </div>
      </Router>
    );
  }
}

export default App;
