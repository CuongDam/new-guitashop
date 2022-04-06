import React, { useState } from "react";
import "./Header.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/index";
import Store from "./pages/Store";
import Collection from "./pages/Collection";
import Support from "./pages/Support";

const Header = () => { 
  
  // const [token, setToken] = useState();
  
  // if(!token) {
  //   return
  // }

  return (
  

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;
