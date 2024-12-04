import React, { useState, useEffect } from 'react';
import { getCars } from '../services/api';  // Importing the api.js file for API calls
import CarCard from './CarCard';  // Create this component to display each individual car

const CarList = () => {
  const [cars, setCars] = useState([]);

  // Fetch all cars when the component mounts
  useEffect(() => {
    const fetchCars = async () => {
      const carData = await getCars({});  // Empty object to get all cars without filtering
      setCars(carData);
    };
    fetchCars();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Available Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.length > 0 ? (
          cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">No cars available</p>
        )}
      </div>
    </div>
  );
};

export default CarList;
