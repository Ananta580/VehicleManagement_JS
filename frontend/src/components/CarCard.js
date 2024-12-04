import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img 
        src={car.images[0]} 
        alt={car.model} 
        className="w-full h-64 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{car.make} {car.model}</h3>
        <p className="text-gray-600 text-sm">{car.year}</p>
        <p className="text-lg font-bold text-green-500">${car.price}</p>
        <p className="text-sm text-gray-600">{car.kms} KMs</p>
        <a 
          href={`/car/${car._id}`} 
          className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium text-sm"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default CarCard;
