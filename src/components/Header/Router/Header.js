import React, { Fragment, useState } from "react";
import "./Header.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Collection from "../pages/Collection";
import Support from "../pages/Support";
// import Dashboard from "../pages/Dashboard";
// import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "../Navbar/Login";

const Header = () => {
  return (
    <>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact element={<PrivateRoute />}>
              <Route exact path="/home" element={<Home />} />
              <Route path="/support" element={<Support />} exact />
              <Route path="/collection" element={<Collection />} exact />
            </Route>
              <Route path="/store" element={<Store />} exact />
              <Route path="/login" element={<Login />} exact />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
};

export default Header;
