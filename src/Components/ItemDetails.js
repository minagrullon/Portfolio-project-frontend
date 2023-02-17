import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Comments from "./Comments";

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
    <div className="grid justify-center phone:grid">
      <div className="flex justify-evenly my-4 p-10">
        <div className="max-w-full h-auto rounded-lg border black mx-20 ">
          <img className="h-96" src={item.image} alt={item.image} />
        </div>
        <div className="w-6/12">
          <h2 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-800">
            {item.name}
            {item.is_fav ? <span className="ml-4">❣️</span> : null}
          </h2>
          <h3 className="phone:pl-8">$ {item.price}</h3>
          <p className="text-xl font-light leading-relaxed mt-6 mb-6 text-gray-800">
            {item.description}
          </p>
          <a
            href={item.link}
            rel="noreferrer"
            target="_blank"
            className="font-medium leading-tight text-base text-blue-400 underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
          >
            <h5>Find the item here!</h5>
          </a>
        </div>
      </div>
      <div className="flex justify-evenly my-4">
        <button
          className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-blue-400 hover:bg-opacity-30 focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
          onClick={() => {
            navigate("/items");
          }}
        >
          Go back
        </button>
        <button
          className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-yellow-400 hover:bg-opacity-30 focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
          onClick={() => {
            navigate(`/items/${id}/edit`);
          }}
        >
          Edit this Item
        </button>
        <button
          className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-red-400 hover:bg-opacity-30 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={handleDelete}
        >
          Delete this item
        </button>
      </div>
      <hr></hr>
      <hr></hr>
      <Comments itemId={item.id} />
    </div>
  );
}
