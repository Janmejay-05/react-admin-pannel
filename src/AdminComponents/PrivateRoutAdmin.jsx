import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouteAdmin = ({ children }) => {
  const Authentic = useSelector((state) => state.auth.isAuth);
  if (!Authentic) {
    alert("log in first");
    return <Navigate to={"/adminlogin"} />;
  }

  return children;
};

export default PrivateRouteAdmin;
