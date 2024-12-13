import React from "react";

const CarCard = ({ car }) => {
  return (
    <a
      href={`/car/${car._id}`}
      className="block  rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out"
    >
      <img
        src={car.images[0]}
        alt={car.model}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {car.name}: {car.model}
        </h3>
        <p className="text-gray-600 text-sm">{car.year}</p>
        <p className="text-lg font-bold text-emerald-600">${car.price}</p>
        <p className="text-sm text-gray-600">{car.kms} Kilometers</p>
        <span className="mt-4 inline-block text-indigo-500 hover:text-indigo-700 font-medium text-sm">
          View Details
        </span>
      </div>
    </a>
  );
};

export default CarCard;
