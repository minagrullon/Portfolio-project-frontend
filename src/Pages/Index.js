import React from "react";
import { useState } from "react";
import Items from "../Components/Items";
import Category from "../Components/Category";
import "./Index.css";

export default function Index() {
  const [category, setCategory] = useState("");
  return (
    <div className="index_page">
      <Category setCategory={setCategory} />
      <h2>Recommended Products</h2>
      <Items category={category} />
    </div>
  );
}
