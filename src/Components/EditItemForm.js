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
    <div className="block p-6 rounded-xl shadow-xl bg-white w-6/12 h-auto">
      <h3 className="font-medium text-xl text-sky-700 mb-10">Edit Page</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-medium text-blue-600">
          Name:{" "}
          <input
            id="name"
            value={item.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Add item name here..."
            required
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </label>
        <label htmlFor="description" className="font-medium text-blue-600">
          Description:{" "}
          <textarea
            id="description"
            value={item.description}
            type="text"
            onChange={handleTextChange}
            placeholder="Tell me about it..."
            required
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </label>
        <label htmlFor="description" className="font-medium text-blue-600">
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
            mb-2
       "
          />
        </label>
        <br></br>
        <label htmlFor="link" className="font-medium text-blue-600">
          Link:{" "}
          <input
            id="link"
            value={item.link}
            type="url"
            onChange={handleTextChange}
            placeholder="http://example.com"
            pattern="http[s]*://.+"
            required
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
          
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </label>
        <br></br>
        <label htmlFor="image" className="font-medium text-blue-600">
          Image:{" "}
          <input
            id="image"
            value={item.image}
            type="url"
            onChange={handleTextChange}
            placeholder="Enter image url here!"
            pattern="http[s]*://.+"
            required
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
          
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"'
          />
        </label>
        <br></br>
        <label htmlFor="is_fav" className="font-medium text-blue-600">
          Favorite:{" "}
          <input
            id="is_fav"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={item.is_fav}
          />
        </label>
        <br></br>
        <label htmlFor="category" className="font-medium text-blue-600">
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
          </select>
        </label>
        <br></br>
        <input
          className="text-white text-mediium bg-blue-300 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm sm:w-auto px-2 py-2.5 text-center w-24 mt-6"
          type="submit"
        />
      </form>
    </div>
  );
}
