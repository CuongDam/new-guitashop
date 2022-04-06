import React, { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// async function loginUser(credentials) {
//   return fetch("http://localhost:8080/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

function Login({ handleClose, show }) {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(32).required(),
  });

  //   const [isShow, setIsShow] = useState(show);
  // function setToken(userToken) {
  //     sessionStorage.setItem('token', JSON.stringify(userToken));
  //   }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  //   const onSubmit = (data) => {
  //     console.log(data);
  //     reset();
  //   };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //   const onSubmit = async (e) => {
  //     e.preventDefault();
  //     const token = await loginUser({
  //       email,
  //       password,
  //     });
  //     setToken(token);
  //   };

  const handleCloseModal = () => {
    reset();
    handleClose();
  };

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header style={{ backgroundColor: "orange" }} closeButton>
          <Modal.Title style={{ marginLeft: "200px", color: "white" }}>
            Sign In
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
              
            <label className="form-label"> Enter your email: </label>
            <input
              value={email}
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
                }}
              >
                email không hợp lệ.{" "}
              </span>
            )}

            <label className="form-label"> Your Password: </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // className="form-input"
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

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{ backgroundColor: "orange" }}
            variant="primary"
            onClick={handleSubmit()}
          >
            Submit
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
 
export default Login;
