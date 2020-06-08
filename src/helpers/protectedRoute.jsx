import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "./token";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth()) {
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