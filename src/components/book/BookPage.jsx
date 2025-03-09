import React, { useEffect, useState } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import styles from "./BookPage.module.scss";
import { CiStar } from "react-icons/ci";
const BookPage = () => {
  const [newBook, setNewBook] = useState({});
  const { bookId } = useParams();
  const BookHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/api/books/${bookId}`);
      const newBookData = await response.json();
      console.log(newBookData);
      setNewBook(newBookData);
    } catch (error) {
      console.error("Error fetching the book", error);
    }
  };

  useEffect(() => {
    BookHandler();
  }, [bookId]);

  const addToCart = (book) => {
    const existingBooks = JSON.parse(localStorage.getItem("myBooks")) || [];
    const updatedBooks = [...existingBooks, book];
    localStorage.setItem("myBooks", JSON.stringify(updatedBooks));
    console.log(updatedBooks);
  };

  return (
    <>
      <div className={styles.BookPage}>
        <img src={newBook.image} alt={newBook.title} />
        <div className={styles.details}>
          <h2 style={{ color: "rgb(82, 12, 79)" }}>{newBook.title}</h2>
          <p style={{ color: "rgb(182, 50, 171)" }}>
            Author: {newBook.author} || Publisher : Arrow
          </p>

          <div>
            <CiStar style={{ color: "orange" }} />
            <CiStar style={{ color: "orange" }} />
            <CiStar style={{ color: "orange" }} />
            <CiStar />
            <CiStar />
          </div>
          <h4 style={{ color: "darkred", fontSize: "17px", margin: "8px 0px" }}>
            ₹{newBook.price}
          </h4>
          <p style={{ margin: "0px" }}>Category: {newBook.category}</p>
          <p style={{ color: "green", margin: "0px" }}>Available</p>
          <p style={{ fontStyle: "italic", margin: "0px" }}>
            Ships within 2-3 days
          </p>
          <p style={{ color: "rgb(121, 21, 120)" }}>{newBook.description}</p>
        </div>
        <div className={styles.btns}>
          <p>Quantity :</p>
          <button className={styles.cart} onClick={() => addToCart(newBook)}>
            Add to Cart
          </button>
          <button className={styles.buynow}>Buy Now</button>
          <button className={styles.wishlist}>Add to Wishlist</button>
        </div>
      </div>
    </>
  );
};

export default BookPage;
