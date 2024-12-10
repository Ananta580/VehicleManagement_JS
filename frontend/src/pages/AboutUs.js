import React from "react";
import Navbar from "../components/Navbar"; // Adjust this path if your Navbar file is in a different directory

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="mt-20 flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Welcome to our Cars Management Platform, where innovation meets
            reliability. Explore our journey, vision, and the people behind the
            scenes.
          </p>
        </div>

        {/* Mission Section */}
        <div className="py-16 px-6 bg-white w-full">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg">
              To create a seamless and user-friendly car management experience,
              empowering our users to efficiently manage their automotive data
              while driving innovation in the industry.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 px-6 bg-gray-100 w-full">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member */}
              <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-medium text-gray-700">Bibek Shrestha</h3>
                <p className="text-gray-500">Lead Developer</p>
              </div>
              {/* Another Team Member */}
              <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-medium text-gray-700">Subash Pariyar</h3>
                <p className="text-gray-500">UI/UX Designer</p>
              </div>
              {/* Another Team Member */}
              <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-medium text-gray-700">
                  Ananta Poudel
                </h3>
                <p className="text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="py-16 px-6 bg-indigo-600 text-white w-full">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg">
              To revolutionize car management solutions, paving the way for a
              smarter and more connected automotive future.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white py-6 w-full">
          <p className="text-center">
            © {new Date().getFullYear()} Car Management Platform. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
