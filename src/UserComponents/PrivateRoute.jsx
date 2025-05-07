import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const Authentic = useSelector((state) => state.user.Authentication);
  if (!Authentic) {
    alert("log in first");
    return <Navigate to={"/userlogin"} />;
  }

  return children;
};

export default PrivateRoute;
