import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "./token";

export const ProtectedRoute = ({
  component: Component, loggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        console.log(props)
        if (loggedIn === true) {
            return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/forum/LoginPage",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};