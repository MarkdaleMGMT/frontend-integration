import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import LoginPanel from './LoginPanel/LoginPanel'
import Dashboard from './Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <LoginPanel />
        )} />
        <Route exact path='/Dashboard' render={() => (
          <Dashboard />
        )} />
        <Route render={() => (
          <h1>Not Found</h1>
        )} />
      </Switch>
    );
  }
}

export default App;