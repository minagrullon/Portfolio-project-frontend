import React from "react";
import { Link, useNavigate } from "react-router-dom";
import dog from "../doggo.jpeg";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <img
        src={dog}
        alt="logo"
        className="nav_img"
        onClick={() => navigate(`/`)}
      />
      <h1>
        <Link className="nav_index" to="/items">
          Doggo Central
        </Link>
      </h1>
      <Link
        className=" text-yellow-400 px-5  hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm  text-center mr-2  dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
        to="/items/new"
      >
        <button className="nav_new">Add an item</button>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
    </nav>
  );
}
