import React from "react";
import Hero from "../components/Hero";
import CarList from "../components/CarList";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <CarList />
    </div>
  );
};

export default Home;
