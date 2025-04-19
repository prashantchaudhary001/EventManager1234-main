import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function ProtectedRoute() {
  const { accessToken, user } = useAuth();

  if (!accessToken || !user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />; 
}

export default ProtectedRoute;