import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CarList from "../components/CarList";

const Home = ({ userEmail }) => {
  return (
    <div className="bg-gray-100">
      <Navbar userEmail={userEmail} />  {/* Pass userEmail to Navbar */}
      <Hero />
      <CarList />
    </div>
  );
};

export default Home;
