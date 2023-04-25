import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const Guard = ({ children }) => {
  const token = Cookies.get("token");
  if (token) {
    return <> {children}</>;
  }
  return <Navigate to="/login" />;
};

export default Guard;
