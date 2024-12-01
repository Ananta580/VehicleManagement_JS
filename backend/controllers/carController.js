const Car = require('../models/Car');

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Add a new car
exports.addCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    const car = await newCar.save();
    res.status(201).json(car);
  } catch (err) {
    res.status(400).json({ message: 'Error adding car', error: err.message });
  }
};

// Filter cars by price or KMs
exports.filterCars = async (req, res) => {
  const { price, kms } = req.query;
  try {
    const filter = {};
    if (price) filter.price = { $lte: price };
    if (kms) filter.kms = { $lte: kms };
    const cars = await Car.find(filter);
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get a car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
