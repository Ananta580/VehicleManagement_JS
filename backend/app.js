const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoute");
const carRoutes = require("./routes/carRoutes");

const app = express();

// MongoDB connection
const mongoURI = "mongodb://localhost:27017/dealership";
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error(err));

//Middlewaress
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/cars", carRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
