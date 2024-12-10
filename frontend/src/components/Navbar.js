import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Call the logout function passed from App.js
    }
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center w-full fixed top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">
        <Link to="/">iAuto</Link>
      </h1>
      <div className="flex items-center space-x-6">
        <Link
          to="/home"
          className="text-blue-600 font-semibold hover:text-sky-700"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-blue-600 font-semibold hover:text-sky-700"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-blue-600 font-semibold hover:text-sky-700"
        >
          Contact Us
        </Link>
        <Link
          to="/gallery"
          className="text-blue-600 font-semibold hover:text-sky-700"
        >
          Gallery
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="absolute right-1 top-1 px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-sky-700">
            Search
          </button>
        </div>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
