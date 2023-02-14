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
      <Link className="nav_button" to="/items/new">
        <button className="nav_new">Add an item</button>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
    </nav>
  );
}
