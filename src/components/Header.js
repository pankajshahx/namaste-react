import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <Link to="./grocery">
        <p>Grocery</p>
      </Link>
      <Link to="./">
        <p>Home</p>
      </Link>
    </div>
  );
}

export default Header;
