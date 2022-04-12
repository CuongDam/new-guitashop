import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "../utils";

console.log(isLogin());
const ProtectedRoute = ({redirectPath = '/store'}) => {

  const auth = isLogin();
  return auth ? <Outlet />   : <Navigate to={redirectPath} replace />;
}
export default ProtectedRoute;
