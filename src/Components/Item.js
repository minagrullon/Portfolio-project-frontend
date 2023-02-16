import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item: { id, image, name } }) {
  return (
    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white drop-shadow-lg">
      <Link to={`/items/${id}`}>
        <div className="rounded-lg shadow-lg bg-stone-100 max-w-sm hover:shadow-blue-300">
          <img
            className="w-auto mr-auto ml-auto h-96 md:h-auto object-cover md:w-48 md:rounded-none md:rounded-l-lg"
            src={image}
            alt={name}
          />
          <h4 className="text-gray-600 text-l font-medium mb-2 p-3">{name}</h4>
        </div>
      </Link>
    </div>
  );
}
