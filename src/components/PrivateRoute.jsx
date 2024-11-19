import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, setDestination } = useContext(AuthContext);
  const { pathname } = useLocation();
  useEffect(() => {
    setDestination(() => pathname);
  }, [pathname]);

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
