import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useProvider } from "./BuyProvider";
import { Pagination } from "./Pagination";
import { Product } from "./Product";
import { IoIosSync } from "react-icons/io";
export const Home = () => {
  // const [products, setproduct] = useState([]);
  const { products, setproduct } = useProvider();
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);
  const [isloading, setisloading] = useState(true);
  const fetchProduct = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setallProducts(res.products);
        setproduct(res.products.slice(0, 10));
        setisloading(false);
      });
  };

  useEffect(() => {
    // localStorage.setItem("cartItems", [{ test: 1 }]);
    fetchProduct();
  }, []);

  useEffect(() => {
    setproduct(allProducts.slice(10 * (page - 1), 10 * (page - 1) + 10));
  }, [page]);

  return (
    <>
      <Row className="d-flex justify-content-around">
        {isloading ? (
          <IoIosSync />
        ) : (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        )}
      </Row>
      {!isloading && (
        <Pagination page={page} setpage={setpage} len={products.length / 10} />
      )}
    </>
  );
};
