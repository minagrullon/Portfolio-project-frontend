import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const API = process.env.REACT_APP_API_URL;

export default function Items({ category }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/items`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="mx-20 mt-10 grid grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-1">
      {category
        ? items
            .filter((item) => {
              return item.category === category;
            })
            .map((item) => {
              return <Item key={item.id} item={item} />;
            })
        : items.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
    </div>
  );
}
