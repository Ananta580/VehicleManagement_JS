import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CarList from "../components/CarList";

const Home = () => {
  return (
    <div className="bg-gray-100">
      
      <Navbar />
      <Hero />
      <CarList />
    
    </div>
  );
};

export default Home;
