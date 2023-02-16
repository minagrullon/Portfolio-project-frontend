import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewItem({ setShowModal, showModal }) {
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
    if (item.name === "" || item.description === "" || item.link === "") {
      setShowModal(true);
    } else {
      setShowModal(false);
      addItem(item);
    }
  };

  return (
    <div className="block p-12 rounded-xl shadow-xl bg-white w-6/12">
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
      <h3 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-400 p-3">
        New Item Form
      </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-medium text-sky-500">
          Name:{" "}
          <input
            id="name"
            value={item.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Add item name here..."
            className="inline-flex
            w-full
            px-3
            py-1.5
            text-base
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            mb-2
            focus:text-gray-700 focus:bg-white focus:border-sky-500 focus:outline-none"
            // required
          />
        </label>
        <label htmlFor="description" className="font-medium text-sky-500">
          Description:{" "}
          <textarea
            id="description"
            value={item.description}
            type="text"
            onChange={handleTextChange}
            placeholder="Tell me about it..."
            // required
            className="block
            w-full
            px-3
            py-1.5
            text-base
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            mb-2
            h-24
            focus:text-gray-700 focus:bg-white focus:border-sky-300 focus:outline-none"
          />
        </label>
        <label htmlFor="description" className="font-medium text-sky-500">
          Price: ${" "}
          <input
            id="price"
            value={item.price}
            type="number"
            onChange={handleTextChange}
            min="0"
            step="0.01"
            pattern="\d*\.\d{2}"
            className="inline-block
            w-2/12
            px-3
            py-1.5
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            mb-2"
            // required
          />
        </label>
        <br></br>
        <label htmlFor="link" className="font-medium text-sky-500">
          Link:{" "}
          <input
            id="link"
            value={item.link}
            type="url"
            onChange={handleTextChange}
            placeholder="http://example.com"
            pattern="http[s]*://.+"
            className="inline-block
            w-2/3
            px-3
            py-1
            text-base
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            mb-2
          
            focus:text-gray-700 focus:bg-white focus:border-sky-300 focus:outline-none"
            // required
          />
        </label>
        <br></br>
        <label htmlFor="image" className="font-medium text-sky-500">
          Image:{" "}
          <input
            id="image"
            value={item.image}
            type="url"
            onChange={handleTextChange}
            placeholder="Enter image url here!"
            pattern="http[s]*://.+"
            className='inline-block
            w-2/3
            px-3
            py-1
            text-base
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            mb-2
          
            focus:text-gray-700 focus:bg-white focus:border-sky-300 focus:outline-none"'
            // required
          />
        </label>
        <br></br>
        <label htmlFor="is_fav" className="font-medium text-sky-500">
          Favorite:{" "}
          <input
            id="is_fav"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={item.is_fav}
          />
        </label>
        <br></br>
        <label htmlFor="category" className="font-medium text-sky-500">
          Category:{" "}
          <select id="category" onChange={handleSelectionChange}>
            <option value=""></option>
            {category.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <br></br>
        <input
          className="text-white text-mediium bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm sm:w-auto px-2 py-2.5 text-center w-24 mt-6"
          type="submit"
        />
      </form>
    </div>
  );
}
