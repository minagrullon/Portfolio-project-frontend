import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function ItemDetails() {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/items/${id}`)
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

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
    </div>
  );
}
