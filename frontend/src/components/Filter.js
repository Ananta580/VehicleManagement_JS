import React from 'react';

const Filter = ({ setFilters }) => {
  const handlePriceChange = (e) => {
    setFilters((prev) => ({ ...prev, price: e.target.value }));
  };

  const handleKmsChange = (e) => {
    setFilters((prev) => ({ ...prev, kms: e.target.value }));
  };

  return (
    <div className="filter-container">
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        placeholder="Max Price"
        onChange={handlePriceChange}
      />
      
      <label htmlFor="kms">KMs:</label>
      <input
        type="number"
        id="kms"
        placeholder="Max KMs"
        onChange={handleKmsChange}
      />
    </div>
  );
};

export default Filter;
