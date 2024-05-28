import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// Reference: https://dev.to/collins87mbathi/reactjs-protected-route-m3j

const ProtectedRoute = ({ element }) => {
  const { authUser } = useSelector((state) => state);
  const location = useLocation();

  return authUser ? (
    element
  ) : (
    <Navigate to="/login" state={{ prevLocation: location }} replace />
  );
};

export default ProtectedRoute;
