import React from "react";
import HeroImage from "../assets/hero.webp"; // Replace with your image

const Hero = () => {
  return (
    <div
      className="relative h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Hero;
