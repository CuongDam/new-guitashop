import React from "react";
import storeProduct from "./CardData";
import { Card, Col, Row } from "antd";
import "./CardProduct.css";
import Banner from "./images/left-banner.jpg";
import "../styles/Modal.css"

const Home = () => {
  const DATA = storeProduct;

  const CardProduct = () => {
    return (
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "35px",
          }}
        >
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>Checkout the</h1>{" "}
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginLeft: "10px",
              color: "orange",
            }}
          >
            Store
          </h1>
        </div>
        <div className="poster-card">
          <h2
            style={{
              paddingLeft: "20px",
              fontWeight: "700",
              marginLeft: "60px",
            }}
          >
            NEW ON THE BOARD
          </h2>
          <h2
            style={{
              marginRight: "60px",
              fontWeight: "400",
              color: "#ccc",
              fontSize: "20px",
            }}
          >
            VIEW ALL
          </h2>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={18}>
            {DATA.map((card, index) => (
              <Col span={8} key={card.id}>
                <Card bordered={false}>
                  <img className="img-card" src={card.path} />
                  <div style={{ fontSize: "25px", marginLeft: "70px" }}>
                    {card.title}
                  </div>
                  <div className="text">{card.price}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  };
  return (
    <>
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
      <CardProduct />
    </>
  );
};

export default Home;
