import React from "react";
import HomePage from "./components/homepage/HomePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import ShopPage from "./components/shop/ShopPage";
import SellPage from "./components/sell/SellPage";
import CartPage from "./components/cart/CartPage";
import NavBar from "./components/navbar/NavBar";
import BookPage from "./components/book/BookPage";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/book/:bookId" element={<BookPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
