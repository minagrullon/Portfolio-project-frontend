import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EditItemForm() {
  let { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`${API}/items/${id}`)
      .then((res) => setItem(res.data))
      .catch((error) => navigate("/not-found"));
  }, [id]);

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

  const updateItem = (updatedItem) => {
    axios
      .put(`${API}/items/${id}`, updatedItem)
      .then(() => {
        navigate(`/items/${id}`);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(item, id);
  };

  return (
    <div className="edit_form">
      <h3>Edit page</h3>
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
          <select
            id="category"
            value={item.category}
            onChange={handleSelectionChange}
          >
            <option value=""></option>
            {/* {category.map((option) => ( */}
            <option key={category[0].value} value={category[0].value}>
              {category[0].label}
            </option>
            <option key={category[1].value} value={category[1].value}>
              {category[1].label}
            </option>
            <option key={category[2].value} value={category[2].value}>
              {category[2].label}
            </option>
            {/* ) */}
            {/* )} */}
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
