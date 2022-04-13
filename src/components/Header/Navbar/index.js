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
import { useNavigate } from "react-router-dom";

// import React, { useState } from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import Modal from "react-bootstrap/Modal";

// import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { Button, Alert } from "bootstrap";

import { isLogin } from "../utils";

// const schema = yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().min(8).max(32).required(),
// });

const Navbar = () => {
  const [show, setShow] = useState(false);

  const checkAlert = isLogin();

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const navigation = useNavigate();
  const handleLogout = () => {
    navigation("store");
    localStorage.removeItem("jsonUser");
  };

  const showAlert = () => {
    if (checkAlert === false) {
      alert("ban can dang nhap de su dung chuc nang nay!!");
    }
  };

  // const [showAlert, setShowAlert] = useState(false);
  // const handleShowAlert = () => {
  //   if(checkAlert ===false){
  //      setShowAlert(true);
  //   }else setShowAlert(false);
  // };

  // function AlertDismissibleExample() {
  //   if (showAlert) {
  //     return (
  //       <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
  //         <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
  //         <p>You need to be logged to use this function</p>
  //       </Alert>
  //     );
  //   }
  // }

  // const Login = (props) => {
  //   // const { handleClose, show } = props;
  //   let history = useNavigate();
  //   props = { history }

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //     reset,
  //   } = useForm({ resolver: yupResolver(schema) });

  //   // const [email, setEmail] = useState("");
  //   // const [password, setPassword] = useState("");

  //   const onSubmitHandler = (data) => {
  //     console.log({ data });

  //     const jsonData = JSON.stringify(data);
  //     localStorage.setItem("jsonUser", jsonData);
  //     reset();
  //     props.history.push("/dashboard");
  //   };

  //   const handleCloseModal = () => {
  //     reset();
  //     handleClose();
  //   };

  //   return (
  //     <>
  //       <Modal show={show} onHide={handleCloseModal}>
  //         <Modal.Header style={{ backgroundColor: "orange" }} closeButton>
  //           <Modal.Title style={{ marginLeft: "200px", color: "white" }}>
  //             Sign In
  //           </Modal.Title>
  //         </Modal.Header>

  //         <Modal.Body>
  //           <form onSubmit={handleSubmit(onSubmitHandler)}>
  //             <label className="form-label"> Enter your email: </label>
  //             <input
  //               // value={email}
  //               // onChange={(e) => setEmail(e.target.value)}
  //               style={{ display: "flex", width: "100%", marginBottom: "10px" }}
  //               {...register("email")}
  //               placeholder="your email"
  //               required
  //             />
  //             {errors.email && (
  //               <span
  //                 style={{
  //                   color: "red",
  //                   textDecoration: "underline red",
  //                   marginBottom: "15px",
  //                   display: "flex",
  //                 }}
  //               >
  //                 email không hợp lệ.
  //               </span>
  //             )}

  //             <label className="form-label"> Your Password: </label>
  //             <input
  //               // value={password}
  //               // onChange={(e) => setPassword(e.target.value)}
  //               style={{ display: "flex", width: "100%" }}
  //               {...register("password")}
  //               placeholder="your password"
  //               required
  //             />
  //             {errors.password && (
  //               <span style={{ color: "red", textDecoration: "underline red" }}>
  //                 Password must be at least 8 characters.
  //               </span>
  //             )}

  //             <hr />
  //             <div style={{ display: "flex", justifyContent: "right" }}>
  //               <button
  //                 onClick={handleCloseModal}
  //                 type="close"
  //                 style={{
  //                   marginRight: "29px",
  //                   backgroundColor: "#ccc",
  //                   width: "65px",
  //                   height: "35px",
  //                 }}
  //               >
  //                 Close
  //               </button>
  //               <button
  //                 onClick={handleSubmit(onSubmitHandler)}
  //                 type="submit"
  //                 style={{
  //                   backgroundColor: "orange",
  //                   width: "65px",
  //                   height: "35px",
  //                 }}
  //               >
  //                 Signin
  //               </button>
  //             </div>
  //           </form>
  //         </Modal.Body>
  //       </Modal>
  //     </>
  //   );
  // };

  return (
    <>
      <Nav>
        <NavLink to="/home" onClick={showAlert}>
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
        <NavMenu>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/collection" onClick={showAlert}>
            Collection
          </NavLink>
          <NavLink to="/support" onClick={showAlert}>Support</NavLink>
          {/* <NavLink to="/sign-up">Sign Up</NavLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            to="#"
            style={{ position: "absolute" }}
            onClick={handleShow}
          >
            Log In
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink
            to="#"
            style={{
              position: "absolute",
              left: "950px",
              width: "114px",
              height: "52px",
            }}
            onClick={handleLogout}
          >
            Log out
          </NavBtnLink>
        </NavBtn>
        <Login show={show} handleClose={handleClose} />

        {/* <Login /> */}

        {/* <Toast show={showToast} onClose={toggleShow} /> */}

        {/* <Toast show={show} toastList={testList} position="bottom-right" /> */}

        {/* <AlertDismissibleExample /> */}

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
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "25px",
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
