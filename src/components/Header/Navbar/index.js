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
          <NavLink to="/about" >
           Store
          </NavLink>
          <NavLink to="/collection"  >
            Collection
          </NavLink>
          <NavLink to="/contact-us"  >
            Support
          </NavLink>
          <NavLink to="/sign-up" >
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