import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ userEmail, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout button clicked");
    onLogout();
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 shadow-md px-8 py-4 flex justify-between items-center w-full fixed top-0 z-50">
      <h1 className="text-xl font-bold text-white">
        <Link className="flex gap-2 items-center text-xl" to="/">
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
          iAuto
        </Link>
      </h1>
      <div className="flex items-center space-x-6 text-gray-200">
        <Link to="/home" className="hover:text-white">
          Home
        </Link>
        <Link to="/about" className="hover:text-white">
          About
        </Link>
        <Link to="/contact" className="hover:text-white">
          Contact
        </Link>
        <span>|</span>
        <Link to="/car/add" className="hover:text-white">
          Add Car
        </Link>
        <div className="flex items-center space-x-2 bg-white bg-opacity-15 px-3 py-1 pr-1 rounded-full">
          <img
            src="https://api.dicebear.com/9.x/identicon/svg?seed=Aiden"
            alt="User Avatar"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-xs">{userEmail}</span>
          <button
            onClick={handleLogout}
            className="text-white bg-indigo-900 text-xs rounded-full px-4 py-2 hover:bg-indigo-800 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
