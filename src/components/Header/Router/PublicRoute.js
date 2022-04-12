import React from 'react'
import {Route, Navigate} from 'react-router-dom';
import { isLogin } from '../utils';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
  const auth = isLogin();
  return (
      <Route {...rest} render={props => (
        auth && restricted ?
              <Navigate to="/login" />
          : <Component {...props} />
      )} />
  );
};


export default PublicRoute;