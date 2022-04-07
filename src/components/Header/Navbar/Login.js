import React, { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { defaultLogin } from "../utils";


const Login = (props) => {
  const { handleClose, show } = props;

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
  // const user = {
  //   email: email,
  //   password: password,
  // };

  const handleCloseModal = () => {
    reset();
    handleClose();
  };

  const isLogin = () => {
    if (
      defaultLogin.defaultUsername === email &&
      defaultLogin.defaultPassword === password
    ) {
      setAuthenticated(true);
    } else setAuthenticated(false);
    return isAuthenticated;
  };

  // const isLogin = () => {
  //   if (
  //     defaultLogin.defaultUsername === email &&
  //     defaultLogin.defaultPassword === password
  //   ) {
  //     isAuthenticated = true;
  //     console.log(isAuthenticated);
  //   } else {
  //     isAuthenticated = false;
  //   }
  // };

  return (
    <>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header style={{ backgroundColor: "orange" }} closeButton>
          <Modal.Title style={{ marginLeft: "200px", color: "white" }}>
            Sign In
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
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
                  display: "flex"
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
                onClick={handleSubmit}
                type="submit"
                style={{
                  backgroundColor: "orange",
                  width: "65px",
                  height: "35px",
                }}
              >
                Sign in
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
