import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';
import {isLogin} from "../utils"



const PublicRoute = () => {

 const auth = isLogin();

  return auth ? <Navigate to="/home" /> : <Outlet />
};

export default PublicRoute;