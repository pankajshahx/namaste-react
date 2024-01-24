import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex p-4 items-center justify-end bg-white shadow-xl">
      <Link className="px-4" to="./grocery">
        <p className="hover:text-orange-500 font-bold">Grocery</p>
      </Link>
      <Link className="hover:text-orange-500 font-bold px-4" to="./">
        <p>Home</p>
      </Link>
    </div>
  );
}

export default Header;
