import React, { useState } from "react";
import { API_URL } from "../api"; // Assuming you have an API_URL constant
import styles from "./SellPage.module.scss";
import NavBar from "../navbar/NavBar";

const SellPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: "",
    description: "",
    category: "",
    price: "",
  });

  const categories = [
    "Fiction",
    "Horror",
    "Fantacy",
    "Science",
    "Biography",
    "Romance",
    "Mystery",
    "Education",
    "Comic",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/books/sellbook`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit book details");
      }

      alert("Book added successfully!");
      setFormData({
        title: "",
        author: "",
        image: "",
        description: "",
        category: "",
        price: "",
      });
    } catch (error) {
      console.error("Error submitting book:", error);
      alert("Failed to submit book. Please try again.");
    }
  };

  return (
    <div className={styles.SellPage}>
      <h2>Sell Your Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Name"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellPage;
