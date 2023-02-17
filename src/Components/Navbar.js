import React from "react";
import { Link, useNavigate } from "react-router-dom";
import dog from "../doggo.jpeg";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between p-2">
      <div className="flex">
        <img
          src={dog}
          alt="logo"
          className="nav_img p-2 "
          onClick={() => navigate(`/`)}
        />

        <h1 className=" font-bold leading-tight text-2xl px-3 py-5 text-blue-900 max-w-xs hover:shadow-lg transition duration-300 ease-in-out">
          <Link to="/items">Doggo Central</Link>
        </h1>
      </div>
      <div className="flex justify-around">
        <Link to="/items/new">
          <button className=" text-yellow-300  hover:text-black border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm  text-center py-2 px-4 m-2">
            Add
          </button>
        </Link>
        <Link to="/about">
          <button className="text-yellow-300  hover:text-black border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm  text-center p-2 m-2">
            About
          </button>
        </Link>
      </div>
    </nav>
  );
}
