import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import LoginPanel from './LoginPanel/LoginPanel'
import Dashboard from './Dashboard/Dashboard'
import SignUpPanel from './SignUpPanel/SignUpPanel';
import Forgot from './Forgot/Forgot';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <LoginPanel />
        )} />
        <Route exact path='/dashboard' render={() => (
          <Dashboard />
        )} />
        <Route exact path='/signup' render={() => (
          <SignUpPanel />
        )} />
        <Route exact path='/forgot' render={() => (
          <Forgot />
        )}/>
        <Route render={() => (
          <h1>Not Found</h1>
        )} />
      </Switch>
    );
  }
}

export default App;