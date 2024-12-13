import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import { addCar } from '../services/api'; // Import the addCar API function

const AddCarForm = () => {
  const navigate = useNavigate();  // Initialize navigate
  const [car, setCar] = useState({
    make: '',
    model: '',
    year: '',
    color: '',
    kms: '',
    vin: '',
    price: '',
    images: []
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!car.make || !car.model || !car.year || !car.price || !car.vin || car.images.length === 0) {
      setError('Please fill in all required fields.');
      return;
    }
    try {
      await addCar(car);
      navigate('/'); // Redirect after successful submission using navigate
    } catch (error) {
      setError('Error adding car. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Add a New Car</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="make" value={car.make} onChange={handleChange} placeholder="Make" required />
        <input type="text" name="model" value={car.model} onChange={handleChange} placeholder="Model" required />
        <input type="number" name="year" value={car.year} onChange={handleChange} placeholder="Year" required />
        <input type="text" name="color" value={car.color} onChange={handleChange} placeholder="Color" required />
        <input type="number" name="kms" value={car.kms} onChange={handleChange} placeholder="Kilometers" required />
        <input type="text" name="vin" value={car.vin} onChange={handleChange} placeholder="VIN" required />
        <input type="number" name="price" value={car.price} onChange={handleChange} placeholder="Price" required />
        {/* Add your image upload field if necessary */}
        <input type="file" name="images" onChange={(e) => setCar({ ...car, images: [...car.images, e.target.files[0]] })} multiple />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCarForm;
