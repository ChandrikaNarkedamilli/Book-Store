import React from "react";
import styles from "./NavBar.module.scss";
import { BsCart4 } from "react-icons/bs";
import { IoOptions } from "react-icons/io5";

function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/images/logo.png" />
          <h5>Book Store</h5>
        </div>
        <ul className={styles.navlinks}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/shop">SHOP</a>
          </li>
          <li>
            <a href="/sell">SELL BOOK</a>
          </li>
          <li>
            <a href="/cart">
              Cart <BsCart4 />
            </a>
          </li>
        </ul>
        <div>
          <IoOptions style={{ fontSize: "25px" }} />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
