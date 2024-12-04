import axios from 'axios';

// Base URL for your backend API
const BASE_URL = 'http://localhost:5000/api';  // Change the port and URL if needed

// Fetch all cars
export const getCars = async (filters) => {
  try {
    // Build the query parameters based on filters
    const { price, kms } = filters;
    const filterParams = {};

    if (price) filterParams.price = price;
    if (kms) filterParams.kms = kms;

    const response = await axios.get(`${BASE_URL}/cars`, { params: filterParams });
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
};

// Fetch a single car by ID
export const getCarById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    return null;
  }
};

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    return null;
  }
};

// Login user
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, loginData);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    return null;
  }
};
