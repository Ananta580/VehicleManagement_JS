import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addCar, getCarById, updateCar } from "../../services/api";

const AddCarForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [car, setCar] = useState({
    name: "",
    model: "",
    year: "",
    color: "",
    kms: "",
    vin: "",
    price: "",
    description: "",
    images: [],
  });

  const [error, setError] = useState(null);
  const [imageInput, setImageInput] = useState("");

  useEffect(() => {
    if (id) {
      const fetchCar = async () => {
        try {
          const carData = await getCarById(id);
          setCar(carData);
        } catch (error) {
          setError("Error fetching car data. Please try again.");
        }
      };
      fetchCar();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImageInput(e.target.value);
  };

  const addImage = () => {
    if (imageInput.trim() && car.images.length < 4) {
      setCar((prevCar) => ({
        ...prevCar,
        images: [...prevCar.images, imageInput.trim()],
      }));
      setImageInput("");
    } else if (car.images.length >= 4) {
      setError("You can only add up to 4 images.");
    }
  };

  const removeImage = (index) => {
    setCar((prevCar) => ({
      ...prevCar,
      images: prevCar.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !car.name ||
      !car.model ||
      !car.year ||
      !car.price ||
      !car.vin ||
      !car.description ||
      car.images.length === 0
    ) {
      setError("Please fill in all required fields.");
      return;
    }
    try {
      if (id) {
        await updateCar(id, car);
      } else {
        await addCar(car);
      }
      navigate("/");
    } catch (error) {
      setError("Error saving car. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr flex justify-center items-center">
      <div className="w-1/2 flex justify-center">
        <form onSubmit={handleSubmit} className="p-6 rounded-md w-3/4">
          <h2 className="text-2xl font-bold mb-4">
            {id ? "Edit Car" : "Add a New Car"}
          </h2>
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={car.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
            <input
              type="text"
              name="model"
              value={car.model}
              onChange={handleChange}
              placeholder="Model"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
            <input
              type="number"
              name="year"
              value={car.year}
              onChange={handleChange}
              placeholder="Year"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
            <input
              type="text"
              name="color"
              value={car.color}
              onChange={handleChange}
              placeholder="Color"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
            <input
              type="number"
              name="kms"
              value={car.kms}
              onChange={handleChange}
              placeholder="Kilometers"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
            <input
              type="text"
              name="vin"
              value={car.vin}
              onChange={handleChange}
              placeholder="VIN"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
            <input
              type="number"
              name="price"
              value={car.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
            <textarea
              name="description"
              value={car.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={imageInput}
              onChange={handleImageChange}
              placeholder="Image URL"
              className="w-full p-2 border outline-none focus:ring-2 focus:ring-indigo-700"
            />
            <button
              type="button"
              onClick={addImage}
              className="ml-2 p-2 w-40 bg-gray-500 text-white rounded"
            >
              Add Image
            </button>
          </div>
          <ul className="mb-4 flex flex-wrap w-full">
            {car.images.map((image, index) => (
              <li key={index} className="w-1/4 pr-2 last:pr-0 relative">
                <img
                  src={image}
                  alt={`Car ${index}`}
                  className="w-full h-20 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 flex justify-center w-5 h-5 items-center bg-red-500 text-white rounded-full"
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="w-full p-2 mt-6 bg-gradient-to-tr from-indigo-800 to-indigo-900 text-white rounded"
          >
            {id ? "Update Car" : "Add Car"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCarForm;
