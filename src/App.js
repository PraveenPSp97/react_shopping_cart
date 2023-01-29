import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import { Cart } from "./components/Cart";
import BuyItem from "./components/BuyItem";
import BuyNow from "./components/BuyNow";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/react_shopping_cart" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/buyNow" element={<BuyNow />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<BuyItem />} />
      </Routes>
    </div>
  );
}

export default App;
