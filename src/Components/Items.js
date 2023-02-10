import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const API = process.env.REACT_APP_API_URL;

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/items`)
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="items">
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}
