import React, { Fragment } from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import Collection from "./components/pages/Collection";
import Support from "./components/pages/Support";
import Login from "./components/Login";

import PrivateRoute from "./components/Router/PrivateRoute";
import PublicRoute from "./components/Router/PublicRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <NavLink to="/login"></NavLink>
        <Navbar />
        <Routes>
          <Route exact element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/support" element={<Support />} exact />
              <Route path="/collection" element={<Collection />} exact />
              <Route path="/store" element={<Store />} exact />
          </Route>
          <Route path="login" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
