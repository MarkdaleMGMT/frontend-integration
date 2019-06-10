import { Route, Switch, Redirect} from 'react-router-dom';
import React, { Component } from 'react';
import LoginPanel from './pages/LoginPanel/LoginPanel'
import Dashboard from './pages//Dashboard/Dashboard'
import SignUpPanel from './pages/SignUpPanel/SignUpPanel';
import Forgot from './pages/Forgot/Forgot';

const testAuth = {
  isAuthenticated: false,
  authenticated(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100)
  },
  signout(cb){
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    testAuth.isAuthenticated === true ? <Component {...props}/> : <Redirect to='/' />
  )} />
)



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
        <PrivateRoute path='/protected' render={() => (
          <Dashboard/ >
        )} />
        <Route render={() => (
          <h1>Not Found</h1>
        )} />
      </Switch>
    );
  }
}

export default App;