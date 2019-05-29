import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';

import LoginPanel from './LoginPanel/LoginPanel'
import SignUpPanel from './SignUpPanel/SignUpPanel'
import Forgot from './Forgot/Forgot';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <LoginPanel />
        )} />
        <Route exact path='/Signup' render={() => (
          <SignUpPanel />
        )} />
          <Route exact path='/Forgot' render={() => (
          <Forgot />
        )} />
        <Route render={() => (
          <h1>Not Found</h1>
        )} />
      </Switch>
    );
  }
}

export default App;