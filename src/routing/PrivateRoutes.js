import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import auth from './auth';


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      auth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );
}

export default PrivateRoute;