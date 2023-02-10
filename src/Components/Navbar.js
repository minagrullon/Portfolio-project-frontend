import React from "react";
import { Link } from "react-router-dom";
import dog from "../doggo.jpeg";

export default function Navbar() {
  return (
    <nav>
      <img src={dog} alt="logo" className="nav_img" />
      <h1>
        <Link className="nav_index" to="/items">
          Doggo Central
        </Link>
      </h1>
      <Link className="nav_button" to="/items.new">
        <button className="nav_new">Add an item</button>
      </Link>
    </nav>
  );
}
