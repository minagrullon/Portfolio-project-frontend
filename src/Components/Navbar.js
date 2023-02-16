import React from "react";
import { Link, useNavigate } from "react-router-dom";
import dog from "../doggo.jpeg";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between p-2 phone:grid phone:grid-cols-4 phone:gap-4 phone:h-24">
      <img
        src={dog}
        alt="logo"
        className="nav_img p-2 phone:m-0 phone:grid "
        onClick={() => navigate(`/`)}
      />

      <h1>
        <Link
          className="font-bold leading-tight text-2xl mt-0 mb-2 ml-24 text-blue-900 max-w-xs hover:shadow-lg transition duration-300 ease-in-out phone:text-lg phone:m-2"
          to="/items"
        >
          Doggo Central
        </Link>
      </h1>
      <Link
        className=" text-yellow-300 px-5 h-6 hover:text-black border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm  text-center mr-2  dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-yellow-400 dark:focus:ring-yellow-900   phone:w-16 phone:ml-4"
        to="/items/new"
      >
        <button className="nav_new ">Add</button>
      </Link>
      <Link
        className="text-yellow-300 px-5 h-6 hover:text-black border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm  text-center mr-2  dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-yellow-400 dark:focus:ring-yellow-900   phone:w-16 phone:ml-4 "
        to="/about"
      >
        <p className="phone:pr-2">About</p>
      </Link>
    </nav>
  );
}
