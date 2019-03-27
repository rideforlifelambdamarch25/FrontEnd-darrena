import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DriverRegister from './components/DriverRegister';
import UserRegister from './components/UserRegister';
import DriverLogin from './components/DriverLogin';
import UserLogin from './components/UserLogin'
import PrivateRoute from './components/PrivateRoute';
import DriverProfileView from './views/DriveProfileView';
import UserProfileView from './views/UserProfileView';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/register' component={DriverRegister}/>
          <Route path='/register' component={UserRegister}/>
          <Route path='/login' component={UserLogin}/>
          <Route path='/login' component={DriverLogin}/>
          <Route path='/users' component={UserProfileView}/>
          <Route path='/drivers' component={DriverProfileView}/>
          <PrivateRoute path='/user/protected' component={UserProfileView}/>
          <PrivateRoute path='/driver/protected' component={DriverProfileView} />
        </div>
      </Router>
    );
  }
}

export default App;
