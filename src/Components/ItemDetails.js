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

  return <div>ItemDetails</div>;
}
