import React, { Fragment, useState } from "react";
import "./Header.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Collection from "../pages/Collection";
import Support from "../pages/Support";
import Dashboard from "../pages/Dashboard";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "../Navbar/Login";

const Header = () => {
  return (
    <>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            {/* <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
          <PrivateRoute path="./store" component={<Store />} exact />
          <PrivateRoute path="./support" component={<Support />} exact />
          <PrivateRoute path="./collection" component={<Collection />} exact />
          <PrivateRoute path="./dashboard" component={<Dashboard />} exact /> */}
            {/* <Route index element={<Store />} />
            <Route path="./dashboard" component={<Dashboard />} exact />
            <Route path="./home" component={<Home />} exact />
            <Route path="./support" component={<Support />} exact />
            <Route path="./collection" component={<Collection />} exact />
            <Route path="./login" component={<Login />} exact /> */}
            {/* <Route index element={<Store />} /> */}
            <Route exact element={<PrivateRoute />}>
              <Route exact path="/home" element={<Home />} />
              <Route path="/support" element={<Support />} exact />
              <Route path="/collection" element={<Collection />} exact />
            </Route>
              <Route path="/store" element={<Store />} exact />
              <Route path="/login" element={<Login />} exact />
            {/* <Route index element={<Store />} />

          {/* <Route path="/store" element={<Store />} /> */}
            {/* <Route 
          exact
          path="/home"
          element={
            <PublicRoute restricted={false} >
              <Home />
            </PublicRoute>
          }
          />
           <Route 
          path="/support"
          element={
            <PrivateRoute>
              <Support />
            </PrivateRoute>
          } */}
            {/* <PublicRoute restricted={false} component={Home} path="/home" exact />
          {/* <Route path="/home" exact element={<Home />} /> */}
            {/* <Route path="/collection" element={<Collection />} />
          <Route path="/support" element={<Support />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}{" "}
            {/* <Route path="/" element={<PrivateRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="support" element={<Support />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="collection" element={<Collection />} />
          </Route>
          <Route path="store" element={<PublicRoute />}>
            <Route path="/store" element={<Store />} />
          </Route> */}
            {/* <PublicRoute restricted={false} component={Home} path="/home" exact />
          <PublicRoute
            restricted={true}
            component={Dashboard}
            path="/dashboard"
            exact
          />
          <PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
          </Routes>
        </Fragment>
      </Router>
    </>
  );
};

export default Header;
