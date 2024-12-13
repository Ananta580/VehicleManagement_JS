import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarById } from "../../services/api";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      const carData = await getCarById(id);
      setCar(carData);
      if (carData.images && carData.images.length > 0) {
        setSelectedImage(carData.images[0]);
      }
    };
    fetchCarDetails();
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-20 px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 relative">
          <img
            src={selectedImage}
            alt={car.model}
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />

          <div className="mt-5 flex gap-4 overflow-x-auto">
            {car.images &&
              car.images.map((image, index) => (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                  key={index}
                  src={image}
                  alt={`${car.model} image ${index + 1}`}
                  className={`w-32 h-20 object-cover rounded-lg cursor-pointer border-4 transition-all duration-300 ${
                    selectedImage === image
                      ? "border-indigo-600"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
          </div>
          <button
            className="absolute top-4 right-4 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => (window.location.href = `/car/edit/${id}`)}
          >
            Edit
          </button>
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="text-4xl font-extrabold text-gray-800">
            {car.name}: {car.model}
          </h2>
          <div>
            <span className="text-sm text-gray-500">Year: </span>
            <p className="text-xl text-gray-600">{car.year}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Price: </span>
            <p className="text-2xl font-semibold text-green-600">
              ${car.price}
            </p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Kilometers: </span>
            <p className="text-lg text-gray-600">{car.kms} KMs</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">VIN: </span>
            <p className="text-md text-gray-700 mt-4">{car.vin}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Color: </span>
            <p className="text-md text-gray-700">{car.color}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-lg text-gray-700">{car.description}</p>
      </div>
    </div>
  );
};

export default CarDetails;
