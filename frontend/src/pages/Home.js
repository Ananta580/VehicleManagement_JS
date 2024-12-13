import React from "react";
import Hero from "../components/Hero";
import CarList from "../components/CarList";

const Home = () => {
  return (
    <div>
      <Hero
        title={"Explore Our Cars"}
        subtitle={"Best Car Dealership in Canada"}
      />
      <CarList />
    </div>
  );
};

export default Home;
