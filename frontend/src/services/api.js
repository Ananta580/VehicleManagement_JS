import axios from "axios";

const BASE_URL = "http://localhost:5500/api";

export const getCars = async (filters) => {
  try {
    const { price, kms } = filters;
    const filterParams = {};

    if (price) filterParams.price = price;
    if (kms) filterParams.kms = kms;

    const response = await axios.get(`${BASE_URL}/cars`, {
      params: filterParams,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
};

export const getCarById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    return null;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    return null;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, loginData);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    return null;
  }
};

export const addCar = async (carData) => {
  try {
    const response = await axios.post(`${BASE_URL}/cars`, carData);
    return response.data;
  } catch (error) {
    console.error("Error adding car:", error);
    throw new Error("Error adding car details");
  }
};

export const updateCar = async (id, carData) => {
  try {
    const response = await axios.put(`${BASE_URL}/cars/${id}`, carData);
    return response.data;
  } catch (error) {
    console.error("Error updating car:", error);
    throw new Error("Error updating car details");
  }
};
