import React, { useState, useEffect } from 'react';
import { getCars } from '../services/api';  // Importing the api.js file for API calls
import CarCard from './CarCard';  // Create this component to display each individual car

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const carsPerPage = 16;

  useEffect(() => {
    const fetchCars = async () => {
      const carData = await getCars({});
      setCars(carData);
    };
    fetchCars();
  }, []);

  const paginatedCars = cars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Available Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {paginatedCars.length > 0 ? (
          paginatedCars.map(car => <CarCard key={car._id} car={car} />)
        ) : (
          <p className="col-span-full text-center text-gray-600">No cars available</p>
        )}
      </div>
      <div className="flex justify-center space-x-2 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={currentPage === Math.ceil(cars.length / carsPerPage)}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarList;
