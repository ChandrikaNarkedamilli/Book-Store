import React, { useEffect, useState } from "react";
import { API_URL } from "../api";
import styles from "./BookList.module.scss";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const BookDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/api/books/allbooks`);
      const newBookData = await response.json();
      setBooks(newBookData);
    } catch (error) {
      alert("Unable to fetch Data");
      console.error("cannot fetch data", error);
      setBooks([]);
    }
  };

  useEffect(() => {
    BookDataHandler();
  }, []);

  const addToCart = (book) => {
    const existingBooks = JSON.parse(localStorage.getItem("myBooks")) || [];
    const updatedBooks = [...existingBooks, book];
    localStorage.setItem("myBooks", JSON.stringify(updatedBooks));
    console.log(updatedBooks);
  };

  return (
    <div className={styles.booklist}>
      <h2 style={{ textAlign: "center", margin: "30px" }}>Best Seller Books</h2>
      <div className={styles.bookgrid}>
        {books.map((book) => (
          <div key={book._id} className={styles.book}>
            <p>{book.category}</p>
            <Link key={book._id} to={`/book/${book._id}`}>
              <img src={book.image} alt="bookimg" />
            </Link>
            <h4>{book.title}</h4>
            {/* <p>{book.description}</p> */}
            <h5>Price : {book.price}</h5>
            {/* <button className={styles.cartbtn} onClick={() => addToCart(book)}>
              Add to cart
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
