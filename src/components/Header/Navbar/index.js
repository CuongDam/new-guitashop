import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import "./Modal.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "../images/left-banner.jpg";

import Login from "./Login";

const Navbar = () => {

  const [show, setShow] = useState(false);
  
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Nav>
        <NavLink to="/home">
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: "-10px",
              left: "130px",
            }}
          >
            <i
              className="ti-headphone-alt"
              style={{
                color: "orange",
                marginRight: "5px",
                height: "102px",
                lineHeight: "102px",
                fontSize: "30px"
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
        <NavMenu>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/support">Support</NavLink>
          {/* <NavLink to="/sign-up">Sign Up</NavLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="#" onClick={handleShow}>
            Sign In
          </NavBtnLink>
        </NavBtn>
        
        <Login show={show} handleClose={handleClose} />

        <div>
          <img className="banner-img" src={Banner} />
          <i
            className="ti-headphone-alt"
            style={{
              position: "absolute",
              width: "60px",
              height: "100px",
              left: "1585px",
              top: "595px",
              color: "orange",
              fontSize: "40px",
              textAlign:"center",
              backgroundColor:"white",
              borderRadius: "25px"
            }}
          ></i>
        </div>
        <div className="slider">
          <h1 style={{ fontSize: "50px", fontWeight: "490" }}>
            Browse top quality
          </h1>{" "}
          <p
            style={{
              fontSize: "50px",
              color: "orange",
              float: "left",
              marginRight: "5px",
            }}
          >
            Guitar
          </p>
          <p style={{ fontSize: "50px" }}>online</p>
          <h3
            style={{
              marginTop: "8px",
              fontWeight: "100",
              marginBottom: "20px",
            }}
          >
            Explore 50k+ latest collection of branded guitars online with Rhythm
          </h3>
          <div className="button-primary">
            <button className="get-app">Get the app</button>
            <div style={{ marginLeft: "15px" }}>
              <i className="ti-control-play"></i>
              <i className="ti-apple"></i>
            </div>
          </div>
        </div>
      </Nav>

    </>
  );
};

export default Navbar;
