import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);
  return (
    <div className="flex p-4 items-center justify-end bg-white shadow-xl fixed top-0 left-0 right-0 z-50">
      <Link className="hover:text-orange-500 font-bold px-4" to="./">
        <p>Home</p>
      </Link>
      <Link className="px-4" to="./contact">
        <p className="hover:text-orange-500 font-bold">Contact Us</p>
      </Link>
      <Link className="px-4" to="./grocery">
        <p className="hover:text-green-600 font-bold">Grocery</p>
      </Link>
      <Link className="px-4" to="./teams">
        <p className="hover:text-orange-500 font-bold">Teams</p>
      </Link>
      <Link className="px-4" to="./cart">
        <div className="group flex items-center hover:text-orange-500 font-bold">
          <span className="text-white bg-green-600 px-1 group-hover:bg-orange-500">
            {cartItems?.length}
          </span>
          <p className="ml-1">Cart</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
