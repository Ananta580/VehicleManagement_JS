import React from "react";

const Hero = ({ title = "", subtitle = "" }) => {
  return (
    <div className="relative w-full h-auto mt-16">
      <img
        src="../hero.png"
        alt="Hero"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-bold">{title}</h1>
        <h2 className="text-white  text-2xl w-1/2 text-center mt-4">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
