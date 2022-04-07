import React, { useState } from "react";
import "./Header.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Collection from "../pages/Collection";
import Support from "../pages/Support";
import Login from "../Navbar/Login";

const Header = () => { 
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/support" element={<Support />} />
          <Route path="/log-in" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;
