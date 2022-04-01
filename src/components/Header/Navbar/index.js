import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <i className="ti-headphone-alt" style={{color:"orange", marginRight:"5px"}}></i> 
          <p style={{fontSize:"25px", fontWeight:"bold", color:"black", paddingTop:"20px"}}>Rythm</p>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle hoverStyle>
           Store
          </NavLink>
          <NavLink to="/service" activeStyle hoverStyle>
            Collection
          </NavLink>
          <NavLink to="/contact-us" activeStyle hoverStyle>
            Support
          </NavLink>
          <NavLink to="/sign-up" activeStyle hoverStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;