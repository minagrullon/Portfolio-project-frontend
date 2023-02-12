import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function ItemDetails() {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteItem();
  };

  useEffect(() => {
    axios
      .get(`${API}/items/${id}`)
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const deleteItem = () => {
    axios
      .delete(`${API}/items/${id}`)
      .then(() => {
        navigate(`/items`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="item_details">
      <div className="photo_container">
        <img src={item.image} alt={item.image} />
      </div>
      <div className="">
        <h2>{item.name}</h2>
        <h3>$ {item.price}</h3>
        <p>{item.description}</p>
        <a href={item.link} rel="noreferrer" target="_blank">
          <h5>Find the item here!</h5>
        </a>
      </div>
      <div className="item_buttons">
        <button
          onClick={() => {
            navigate("/items");
          }}
        >
          Go back
        </button>
        <button
          onClick={() => {
            navigate(`/items/${id}/edit`);
          }}
        >
          Edit this Item
        </button>
        <button onClick={handleDelete}>Delete this item</button>
      </div>
    </div>
  );
}
