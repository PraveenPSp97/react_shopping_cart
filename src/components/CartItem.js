import React from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useProvider } from "./BuyProvider";
import { Product } from "./Product";

const CartItem = ({ product }) => {
  const { handleDeleteCart } = useProvider();
  return (
    <Row
      style={{
        width: "80%",
        justifyContent: "center",
        margin: "auto",
        border: " solid #dedede 1px",
        padding: "1rem",
        paddingTop: "1.5rem",
        borderRadius: "5px",
      }}
    >
      <Col style={{ margin: "0", padding: 0 }} sm={6}>
        <img
          src={product.thumbnail}
          style={{
            width: "250px",
            height: "150px",
            objectFit: "cover",
            justifyContent: "flex-start",
          }}
        />
      </Col>

      <Col
        style={{
          textAlign: "left",

          width: "40%",
        }}
      >
        <h5>{product.title}</h5>
        <p>{product.description}</p>

        <h5>&#8377;{product.price * 60}</h5>
        <Row className="justify-content-between">
          <Col m={6} md={4}>
            <button
              style={{
                border: "none",
                backgroundColor: "inherit",
                marginBottom: "2px",
              }}
              onClick={() => handleDeleteCart(product.id)}
            >
              Remove Item
            </button>
          </Col>
          <Col m={6} md={4}>
            <Link to="/buy">
              <Button
                variant="outline-success"
                onClick={() => {
                  handleDeleteCart(product.id);
                }}
              >
                Buy Now
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartItem;
