import React, { useState, useEffect } from 'react';
import { getCars } from '../services/api'; // Importing the API call
import CarCard from './CarCard'; // Component for each car card
import Filter from './Filter'; // Component for filters

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({ price: '', kms: '' });
  const [currentPage, setCurrentPage] = useState(1);

  const carsPerPage = 16;

  useEffect(() => {
    const fetchCars = async () => {
      const carData = await getCars({});
      setCars(carData);
      setFilteredCars(carData);
    };
    fetchCars();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let result = cars;
      if (filters.price) {
        result = result.filter(car => car.price <= filters.price);
      }
      if (filters.kms) {
        result = result.filter(car => car.kms <= filters.kms);
      }
      setFilteredCars(result);
      setCurrentPage(1); // Reset to first page on filter change
    };
    applyFilters();
  }, [filters, cars]);

  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Explore Our Cars
      </h2>

      {/* Filters Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <Filter setFilters={setFilters} />
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {paginatedCars.length > 0 ? (
          paginatedCars.map(car => (
            <CarCard
              key={car._id}
              car={car}
              className="transition-transform transform hover:scale-105"
            />
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-600">
            No cars available matching your criteria.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <p className="text-gray-700 font-medium">
          Page {currentPage} of {Math.ceil(filteredCars.length / carsPerPage)}
        </p>
        <button
          disabled={currentPage === Math.ceil(filteredCars.length / carsPerPage)}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarList;
