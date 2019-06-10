import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import auth from './auth';


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          if (auth.isAdmin()) {
            return <Component {...props} />;
          }
          else {
            return <Component {...props} />;
          }
        }
        else {
          return <Redirect to={
            {
              pathname: "/"
            }
        } />
      }}
    }
    />
  );
}

export default PrivateRoute;