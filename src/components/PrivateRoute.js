import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedUser ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;