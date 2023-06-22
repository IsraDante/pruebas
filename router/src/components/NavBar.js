import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <Link to={"/"} className="logo">
        <h2>Logo</h2>
      </Link>
      <ul className="nav-list">
        <Link to={"/about"} className="about">
          <li>About</li>
        </Link>
        <Link to={"/users"} className="users">
          {" "}
          <li>Users</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
