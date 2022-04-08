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

// import Login from "./Login";
// import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";

import { defaultLogin } from "../utils";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});


const Navbar = () => {

  const [show, setShow] = useState(false);
  
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const Login = (props) => {

    // const { handleClose, show } = props;
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm({ resolver: yupResolver(schema), });
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const isLogin = (data) => {
      if (
        defaultLogin.defaultUsername === data.email &&
        defaultLogin.defaultPassword === data.password
      ) {
        return true;
      } else return false;
    };
    
  const onSubmitHandler = (data) => {
    console.log({data});
    isLogin(data);
  }
  
    const handleCloseModal = () => {
      reset();
      handleClose();
    };
  
    return (
      <>
        <Modal show={show} onHide={handleCloseModal}>
          <Modal.Header style={{ backgroundColor: "orange" }} closeButton>
            <Modal.Title style={{ marginLeft: "200px", color: "white" }}>
              Sign In
            </Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <label className="form-label"> Enter your email: </label>
              <input
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: "flex", width: "100%", marginBottom: "10px" }}
                {...register("email")}
                placeholder="your email"
                required
              />
              {errors.email && (
                <span
                  style={{
                    color: "red",
                    textDecoration: "underline red",
                    marginBottom: "15px",
                    display: "flex",
                  }}
                >
                  email không hợp lệ.
                </span>
              )}
  
              <label className="form-label"> Your Password: </label>
              <input
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: "flex", width: "100%" }}
                {...register("password")}
                placeholder="your password"
                required
              />
              {errors.password && (
                <span style={{ color: "red", textDecoration: "underline red" }}>
                  Password must be at least 8 characters.
                </span>
              )}
  
              <hr />
              <div style={{ display: "flex", justifyContent: "right" }}>
                <button
                  onClick={handleCloseModal}
                  type="close"
                  style={{
                    marginRight: "29px",
                    backgroundColor: "#ccc",
                    width: "65px",
                    height: "35px",
                  }}
                >
                  Close
                </button>
                <button
                  onClick={handleSubmit(onSubmitHandler)}
                  type="submit"
                  style={{
                    backgroundColor: "orange",
                    width: "65px",
                    height: "35px",
                  }}
                >
                  Signin
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
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
          <NavBtnLink to="/login"  onClick={handleShow}>
            Log In
          </NavBtnLink>
        </NavBtn>
        
        <Login />
        {/* <Login show={show} handleClose={handleClose} /> */}

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
