import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="login" />
      }
    />
  );
};

export default GuardedRoute;
