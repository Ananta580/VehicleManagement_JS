import React from "react";

const Filter = ({ setFilters }) => {
  const handlePriceChange = (e) => {
    setFilters((prev) => ({ ...prev, price: e.target.value }));
  };

  const handleKmsChange = (e) => {
    setFilters((prev) => ({ ...prev, kms: e.target.value }));
  };

  return (
    <div className="filter-container px-4 flex flex-col space-y-4">
      <p className="text-lg text-gray-600 font-medium">
        Filter by maximum price and kilometers
      </p>
      <div className="flex space-x-4">
        <div className="flex flex-col">
          <input
            type="number"
            id="price"
            placeholder="Enter maximum price"
            onChange={handlePriceChange}
            className="p-2 border outline-none focus:ring-2 focus:ring-indigo-700"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="number"
            id="kms"
            placeholder="Enter maximum kilometers"
            onChange={handleKmsChange}
            className="p-2 border outline-none focus:ring-2 focus:ring-indigo-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
