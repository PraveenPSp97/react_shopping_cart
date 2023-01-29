import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useProvider } from "./BuyProvider";

export const Product = ({ product }) => {
  const { handleAddToCart } = useProvider();
  return (
    <Card style={{ width: "18rem" }} className="mt-5">
      <Card.Img
        variant="top"
        src={product.thumbnail}
        style={{ height: "250px" }}
        className="mt-2"
      />
      <Card.Body>
        <Link to="/buyNow" state={{ product }}>
          <Button
            variant="primary"
            className="buyNow"
            style={{ backgroundColor: "grey" }}
            // onClick={() => {
            //   handleAddToCart(product);
            // }}
          >
            Buy Now
          </Button>
        </Link>
        <Button
          variant="outline-warning"
          onClick={() => handleAddToCart(product)}
        >
          Cart
        </Button>
      </Card.Body>
    </Card>
  );
};
