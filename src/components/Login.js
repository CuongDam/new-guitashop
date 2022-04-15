import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
// import Modal from "react-bootstrap/Modal";

import { useNavigate } from "react-router-dom";
import { defaultLogin } from "./utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import "./styles/Modal.css";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const navigation = useNavigate();

  const eye = <FontAwesomeIcon icon={faEye}/>

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onSubmitHandler = (data) => {
    console.log({ data });
    if (
      data.email === defaultLogin.defaultUsername &&
      data.password === defaultLogin.defaultPassword
    ) {
      const jsonData = JSON.stringify(data);
      localStorage.setItem("jsonUser", jsonData);
      handleCloseModal();

      alert("dang nhap thanh cong");
      navigation("/home");
    } else {
      alert("sai userName hoac password");
    }
  };

  const handleCloseModal = () => {
    reset();
    // handleClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label className="form-label"> Enter your email: </label>
        <input
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          style={{
            display: "flex",
            width: "100%",
            marginBottom: "10px",
            width: "45%",
            marginBottom: "10px",
            marginLeft: "500px",
          }}
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
              marginLeft: "500px",
            }}
          >
            email không hợp lệ.
          </span>
        )}
        <div>
          <label className="form-label"> Your Password: </label>
          <input
           type={passwordShown ? "text" : "password"}
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            style={{
              display: "flex",
              width: "100%",
              marginBottom: "10px",
              width: "45%",
              marginBottom: "10px",
              marginLeft: "500px",
            }}
            {...register("password")}
            placeholder="your password"
            required
          />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
          {errors.password && (
            <span
              style={{
                color: "red",
                textDecoration: "underline red",
                marginLeft: "500px",
              }}
            >
              Password must be at least 8 characters.
            </span>
          )}
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "right" }}>
          <button
            onClick={handleCloseModal}
            type="close"
            style={{
              marginRight: "40px",
              backgroundColor: "#ccc",
              width: "65px",
              height: "35px",
            }}
          >
            Clear
          </button>
          <button
            onClick={handleSubmit(onSubmitHandler)}
            type="submit"
            style={{
              backgroundColor: "orange",
              width: "65px",
              height: "35px",
              marginRight: "531px",
            }}
          >
            Signin
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
