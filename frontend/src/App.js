import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarList from "./components/CarList";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <CarList />
    
    </div>
  );
};

export default App;
