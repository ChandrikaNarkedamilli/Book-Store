import React, { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import styles from "./CartPage.module.scss";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("myBooks")) || "[]";
    setCartItems(storedCartItems);
    console.log("cartitems:", storedCartItems);
  }, []);

  const removeFromCart = (book) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem !== book);
    localStorage.setItem("myBooks", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div className={styles.CartPage}>
      <h2>Cart Items</h2>
      <div className={styles.cartitem}>
        {cartItems.map((book) => (
          <div>
            {/* <CiCircleRemove
              onClick={() => removeFromCart(book)}
              style={{
                marginLeft: "215px",
                marginBottom: "-28px",
                fontSize: "40px",
                color: "rgb(245, 66, 66)",
              }}
            /> */}
            <ul>
              <li>
                <div key={book._id} className={styles.book}>
                  <img src={book.image} alt="bookimg" />
                  <div className={styles.innerdivs}>
                    <div className={styles.booktexts}>
                      <h4>{book.title}</h4>
                      <p>By : {book.author}</p>
                      <h5>Price : {book.price}</h5>
                    </div>
                    <div className={styles.btns}>
                      <button className={styles.wishlist}>
                        Move to Wishlist
                      </button>
                      <button
                        onClick={() => removeFromCart(book)}
                        className={styles.remove}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <hr
                style={{
                  width: "1250px",
                  margin: "30px",
                  backgroundColor: "yellow",
                }}
              />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
