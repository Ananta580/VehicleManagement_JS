const express = require('express');
const {
  getAllCars,
  addCar,
  filterCars,
  getCarById
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

module.exports = router;
