import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BuyItem = () => {
  return (
    <Container style={{ marginTop: "3rem" }}>
      <h2>Your order is complete</h2>
      <p>Your will receive a confirmation mail with purchase details</p>

      <Link to="/">
        <Button
          variant="outline-primary"
          className="buyNow"
          style={{ backgroundColor: "grey", color: "white", width: "300px" }}
        >
          Continue Shopping
        </Button>
      </Link>
    </Container>
  );
};

export default BuyItem;
