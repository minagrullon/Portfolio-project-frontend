import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewItem() {
  const navigate = useNavigate();

  const [item, setItem] = useState({
    name: "",
    description: "",
    price: 0.0,
    link: "",
    image: "",
    is_fav: false,
    category: "",
  });

  const [select, setSelect] = useState("");

  const category = [
    { value: "food", label: "Food" },
    { value: "clothes", label: "Clothes" },
    { value: "other", label: "Other" },
  ];

  const handleTextChange = (e) => {
    setItem({ ...item, [e.target.id]: e.target.value });
  };

  const handleSelectionChange = (e) => {
    setSelect(e.target.value);
  };

  const handleCheckboxChange = () => {
    setItem({ ...item, is_fav: !item.is_fav });
  };

  const addItem = (newItem) => {
    axios
      .post(`${API}/items`, newItem)
      .then((res) => {
        navigate(`/items`);
      })
      .catch((error) => console.warn(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
  };

  return (
    <div className="new_item">
      <h3>New Item Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          {/* //TODO in the future add margin right to the label to create the spaces between*/}
          Name:{" "}
          <input
            id="name"
            value={item.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Add item name here..."
            required
          />
        </label>
        <label htmlFor="description">
          Description:{" "}
          <input
            id="description"
            value={item.description}
            type="text"
            onChange={handleTextChange}
            placeholder="Tell me about it..."
            required
          />
        </label>
        <label htmlFor="description">
          Price: ${" "}
          <input
            id="price"
            value={item.price}
            type="number"
            onChange={handleTextChange}
            min="0"
            step="0.01"
            pattern="\d*\.\d{2}"
            required
          />
        </label>
        <label htmlFor="link">
          Link:{" "}
          <input
            id="link"
            value={item.link}
            type="url"
            onChange={handleTextChange}
            placeholder="http://example.com"
            pattern="http[s]*://.+"
            required
          />
        </label>
        <label htmlFor="image">
          Image:{" "}
          <input
            id="image"
            value={item.image}
            type="url"
            onChange={handleTextChange}
            placeholder="Enter image url here!"
            pattern="http[s]*://.+"
            required
          />
        </label>
        <label htmlFor="is_fav">
          Favorite:{" "}
          <input
            id="is_fav"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={item.is_fav}
          />
        </label>
        <label htmlFor="category">
          Category:{" "}
          <select id="category" onChange={handleSelectionChange}>
            <option value=""></option>
            {category.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            {/* <option value={category.id} key={category.id}>
              {category.name}
            </option> */}
          </select>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
