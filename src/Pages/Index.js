import React from "react";
import Items from "../Components/Items";
import "./Index.css";

export default function Index() {
  return (
    <div className="index_page">
      <h2>Recommended Products</h2>
      <Items />
    </div>
  );
}
