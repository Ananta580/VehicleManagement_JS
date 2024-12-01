const express = require('express');
const {
  getAllCars,
  addCar,
  filterCars,
  getCarById,
  deleteCar,
  updateCar
} = require('../controllers/carController');

const router = express.Router();

// Get all cars
router.get('/', getAllCars);

// Add a new car
router.post('/', addCar);

// Filter cars by price or KMs
router.get('/filter', filterCars);

// Get a car by ID
router.get('/:id', getCarById);

// Update a car by ID
router.put('/:id', updateCar);

// Delete a car by ID
router.delete('/:id', deleteCar);

module.exports = router;
