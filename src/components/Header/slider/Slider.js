import React from "react";
import "./Slider.css";

export default function Slider() {
  return (
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
      <h3 style={{ marginTop: "8px", fontWeight: "100", marginBottom: "10px" }}>
        Explore 50k+ latest collection of branded guitars online with Rhythm
      </h3>
      <div className="button-primary">
        <button
        className="get-app"
        >
          Get the app
        </button>
        <div style={{marginLeft: '15px'}}>
        <i className="ti-control-play"></i>
        <i className="ti-apple"></i>
        </div>
      </div>
    </div>
  );
}
