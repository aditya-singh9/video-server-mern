import React from "react";
import { Redirect } from "react-router-dom";

const SignOut = (props) => {
  if (localStorage.getItem("userTokenTime")) {
    localStorage.removeItem("userTokenTime");
  }
  return <Redirect to="/signIn" />;
};

export default SignOut;
