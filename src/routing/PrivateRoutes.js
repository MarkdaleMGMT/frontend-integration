import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import auth from './auth';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>
    auth.getAuth() === true ? (<Component {...props} />) : (<Redirect to={{pathname: "/dashboard"}}/>)
  }
  />)


export default PrivateRoute;