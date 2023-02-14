import React from "react";
import { useState } from "react";
import Items from "../Components/Items";
import Category from "../Components/Category";
import "./Index.css";

export default function Index() {
  const [category, setCategory] = useState("");
  return (
    <div>
      <Category setCategory={setCategory} />
      <h2 className="text-2xl font-bold text-blue-500 mb-8 ml-8">
        Recommended Products
      </h2>
      <Items category={category} />
    </div>
  );
}
