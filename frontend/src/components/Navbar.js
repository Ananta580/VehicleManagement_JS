import React from "react";

const Navbar = ({ userEmail }) => {
  return (
    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">iAuto</h1>
      <div className="flex items-center space-x-6">
        <button className="text-blue-600 font-semibold hover:text-sky-700">Home</button>
        <button className="text-blue-600 font-semibold hover:text-sky-700">About Us</button>
        <button className="text-blue-600 font-semibold hover:text-sky-700">Contact us</button>
        <button className="text-blue-600 font-semibold hover:text-sky-700">Gallery</button>
        {userEmail ? (
          <div className="text-blue-600 font-semibold">{userEmail}</div> // Show email if user is logged in
        ) : (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-sky-700">Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
