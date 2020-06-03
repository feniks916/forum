import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getJwt } from "./token";

export const CommonRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
          console.log(getJwt)
        if (getJwt === null) {
          return <Component {...props}/>;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/forum",
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