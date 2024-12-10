import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">iAuto</h1>
      <div className="flex items-center space-x-6">
        <button className="text-blue-600 font-semibold hover:text-sky-700">Home</button>
        <button className="text-blue-600 font-semibold hover:text-sky-700">About Us</button>
        <button className="text-blue-600 font-semibold hover:text-sky-700">Contact us</button>
        <button className="text-blue-600 font-semibold hover:text-sky-700">Gallery</button>
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
      </div>
    </div>
  );
};

export default Navbar;
