import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./ResponsiveNav.css";

import "bootstrap/dist/css/bootstrap.min.css";

// import { navigationItems } from "../../config";

import { useLocation, useNavigate, Link } from "react-router-dom";

import { isLogin } from "../utils";
import "./navbar.css";

const Navbar = () => {
  const useAuth = () => {
    const user = localStorage.getItem("jsonUser");
    if (user) {
      return true;
    } else return false;
  };

  // const _auth = isLogin();
  // const [auth, setAuth] = useState(_auth);
  const navigation = useNavigate();
  const user = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    await localStorage.removeItem("jsonUser");
    navigation("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar_items">
        {user && (
          <>
            <Nav className="Nav-Wrapper">
              <NavLink className="Nav-Home" to="/home">
                <div className="div-home">
                  <i
                    className="ti-headphone-alt"
                    style={{
                      color: "orange",
                      marginRight: "5px",
                      height: "102px",
                      lineHeight: "102px",
                      fontSize: "30px",
                    }}
                  ></i>
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      color: "black",
                      paddingTop: "30px",
                    }}
                  >
                    Rythm
                  </p>
                </div>
              </NavLink>
              <Bars />
              <NavMenu className="Nav-Menu">
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/collection">Collection</NavLink>
                <NavLink to="/support">Support</NavLink>
              </NavMenu>

              <NavBtn>
                <NavBtnLink to="#" className="Nav-Btn-Link" onClick={handleLogout}>
                  Log out
                </NavBtnLink>
              </NavBtn>
            </Nav>
          </>
        )}
        {!user && (
          <Link
            style={{ textDecoration: "none", color: "orange" }}
            to="/login"
            className={location.pathname === "/login" ? "navbar_active" : ""}
          >
            Login
          </Link>
          // <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
