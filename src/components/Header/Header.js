import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="flex justify-between w-full bg-green-500 p-4 shadow-lg">
        <NavLink to="/">
          <span className="font-semibold text-xl tracking-tight text-white">
            Pantry App
          </span>
        </NavLink>
        <div className="flex hidden lg:flex text-sm">
          <NavLink
            activeClassName=""
            className="p-3 ml-2 bg-white font-semibold leading-none border border-gray-400 rounded hover:border-transparent hover:bg-gray-100"
            exact
            to="/"
          >
            Your Pantry
          </NavLink>
          <NavLink
            className="p-3 ml-2 bg-white font-semibold leading-none border border-gray-400 rounded hover:border-transparent hover:bg-gray-100"
            to="/add"
          >
            Add Product
          </NavLink>
          <NavLink
            className="p-3 ml-2 bg-white font-semibold leading-none border border-gray-400 rounded hover:border-transparent hover:bg-gray-100"
            to="/orders"
          >
            Shopping list
          </NavLink>
          <NavLink
            className="p-3 ml-2 bg-white font-semibold leading-none border border-gray-400 rounded hover:border-transparent hover:bg-gray-100"
            to="/settings"
          >
            Settings
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
