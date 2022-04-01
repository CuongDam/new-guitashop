import React from "react";
import storeProduct from "./CardData";
import { Card, Col, Row } from "antd";
import "./CSS/CardProduct.css"


const DATA = storeProduct;


const CardProduct = () => {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{fontSize: "40px", fontWeight:"bold"}}>Checkout the</h1> <h1 style={{fontSize: "40px", fontWeight:"bold", marginLeft:"10px", color:"orange"}}>Store</h1>
      </div>
      <div className="poster-card">
      <h2 style={{paddingLeft:"20px", fontWeight:"700", marginLeft:"60px"}}>NEW ON THE BOARD</h2>
      <h2 style={{marginRight:"60px", fontWeight:"400", color:"#ccc", fontSize: "20px"}}>VIEW ALL</h2>
      </div>
      <div className="site-card-wrapper">
        <Row gutter={18}>
          {DATA.map((card, index) => (
            <Col span={8} key={card.id}>
              <Card  bordered={false}>
                <img className="img-card" src={card.path} />
                <div style={{fontSize:"25px", marginLeft:"70px"}}>{card.title}</div>
                <div className="text">{card.price}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default CardProduct;
