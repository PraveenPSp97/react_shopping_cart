import React from "react";
import { Button, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useProvider } from "./BuyProvider";
import CartItem from "./CartItem";
import { Product } from "./Product";

export const Cart = () => {
  const { cartCount, cartItems } = useProvider();
  // console.log(provider);
  return (
    <Stack direction="vertical" gap={3}>
      {cartItems.length > 0 ? (
        cartItems.map((cart) => <CartItem key={cart.id} product={cart} />)
      ) : (
        <>
          <h2>Cart is Empty</h2>
          <Link to="/">
            <Button
              variant="outline-primary"
              className="buyNow"
              style={{
                backgroundColor: "grey",
                color: "white",
                width: "300px",
              }}
            >
              Continue Shopping
            </Button>
          </Link>
        </>
      )}
    </Stack>
  );
};
