import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item: { id, image, name } }) {
  return (
    <div>
      <Link to={`/items/${id}`}>
        <div className="single_item">
          <img src={image} alt={name} className="show_img" />
          <h4>{name}</h4>
        </div>
      </Link>
    </div>
  );
}
