import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin'
import PrivateRoute from './components/PrivateRoute';
import UserProfileView from './views/UserProfileView';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/login' component={UserLogin}/>
          <PrivateRoute path='/user/protected' component={UserProfileView}/>
        </div>
      </Router>
    );
  }
}

export default App;
