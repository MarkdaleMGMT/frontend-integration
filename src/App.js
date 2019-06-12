import { Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import LoginPanel from './pages/LoginPanel/LoginPanel'
import Dashboard from './pages//Dashboard/Dashboard'
import SignUpPanel from './pages/SignUpPanel/SignUpPanel';
import Forgot from './pages/Forgot/Forgot';
import PrivateRoute from './routing/PrivateRoutes';

class App extends Component {
  
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <LoginPanel />
        )} />
  
        <Route exact path='/signup' render={() => (
          <SignUpPanel />
        )} />
        <Route exact path='/forgot' render={() => (
          <Forgot />
        )}/>
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <Route render={() => (
          <h1>Not Found</h1>
        )} />
      </Switch>
    );
  }
  
}

export default App;