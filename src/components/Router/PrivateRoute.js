import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "../utils";

const auth = isLogin();

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  return auth ? <Outlet /> : <Navigate to={redirectPath} replace />;
};
export default ProtectedRoute;
