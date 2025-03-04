import React from "react";
import NavBar from "../navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import ShopPage from "../shop/ShopPage";
import SellPage from "../sell/SellPage";
import AboutPage from "../about/AboutPage";
import styles from "./HomePage.module.scss";
import { FcSearch } from "react-icons/fc";

function HomePage() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sell" element={<SellPage />} />
      </Routes>

      <div className={styles.container1}>
        <div className={styles.subcontainer1}>
          <h1>Buy and sell various books at lowest prices</h1>
          <p>
            From timeless classics to the latest bestsellers, we offer a diverse
            range of genres including literature, self-help, mystery, romance,
            non-fiction, and much more.
          </p>
          <div className={styles.searchbtn}>
            <input type="text" placeholder="Search books..." />
            <FcSearch className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.subcontainer2}>
          <img src="/images/booksimg.png" alt="books-image" />
        </div>
      </div>

      <div className="bookscontainer"></div>
    </>
  );
}

export default HomePage;
