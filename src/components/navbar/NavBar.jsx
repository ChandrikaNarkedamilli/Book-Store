import React from "react";
import styles from "./NavBar.module.scss";

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
        </ul>
        <div>options</div>
      </nav>
    </>
  );
}

export default NavBar;
