import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById } from '../services/api'; // Add this API service to fetch car by ID

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  useEffect(() => {
    const fetchCarDetails = async () => {
      const carData = await getCarById(id);
      setCar(carData);
      setSelectedImage(carData.images[0]); // Set the first image as the default
    };
    fetchCarDetails();
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-20 px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Main Image Display */}
        <div className="flex-1">
          <img 
            src={selectedImage} 
            alt={car.model} 
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Column - Car Details */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800">{car.make} {car.model}</h2>
          <p className="text-xl text-gray-600">{car.year}</p>
          <p className="text-2xl font-semibold text-green-600">${car.price}</p>
          <p className="text-lg text-gray-600">{car.kms} KMs</p>

          {/* VIN Number */}
          <p className="text-md text-gray-700 mt-4"><strong>VIN:</strong> {car.vin}</p>

          {/* Car Color */}
          <p className="text-md text-gray-700"><strong>Color:</strong> {car.color}</p>

          {/* Button for contacting or inquiring about the car */}
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Seller
          </button>
        </div>
      </div>

      {/* Image Thumbnails */}
      <div className="mt-8 flex gap-4 overflow-x-auto">
        {car.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${car.model} image ${index + 1}`}
            className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all duration-300 ${selectedImage === image ? 'border-blue-600 scale-110' : 'border-gray-300'}`}
            onClick={() => setSelectedImage(image)} // Update the main image on click
          />
        ))}
      </div>
    </div>
  );
};

export default CarDetails;
