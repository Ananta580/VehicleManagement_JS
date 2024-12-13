import React, { useState, useEffect } from "react";
import { getCars } from "../services/api";
import CarCard from "./CarCard";
import Filter from "./Filter";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({ price: "", kms: "" });
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
        result = result.filter((car) => car.price <= filters.price);
      }
      if (filters.kms) {
        result = result.filter((car) => car.kms <= filters.kms);
      }
      setFilteredCars(result);
      setCurrentPage(1);
    };
    applyFilters();
  }, [filters, cars]);

  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  return (
    <div className="mx-auto p-4">
      <div className="p-4 rounded-lg shadow-lg">
        <Filter setFilters={setFilters} />
      </div>
      {paginatedCars.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-5 w-full px-8 my-8">
            {paginatedCars.map((car) => (
              <CarCard
                key={car._id}
                car={car}
                className="transition-transform transform hover:scale-105"
              />
            ))}
          </div>
          {filteredCars.length > carsPerPage && (
            <div className="flex justify-center items-center my-8 space-x-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-4 py-2 bg-indigo-700 text-white rounded-lg shadow-md hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-icons">
                  keyboard_double_arrow_left
                </span>
              </button>
              <p className="text-gray-200 font-medium">
                Page {currentPage} of{" "}
                {Math.ceil(filteredCars.length / carsPerPage)}
              </p>
              <button
                disabled={
                  currentPage === Math.ceil(filteredCars.length / carsPerPage)
                }
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 bg-indigo-800 text-white rounded-lg shadow-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-icons">
                  keyboard_double_arrow_right
                </span>
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="col-span-full text-center text-3xl mt-8 text-gray-500">
          No cars available
          <p className="text-sm text-gray-500 mt-2">
            Please reset your filter criteria
          </p>
        </p>
      )}
    </div>
  );
};

export default CarList;
