const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoute");
const carRoutes = require("./routes/carRoutes");
const jwt = require("jsonwebtoken");

const app = express();

// MongoDB connection
const mongoURI = "mongodb://localhost:27017/dealership";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error(err));

//Middlewaress
app.use(express.json());
app.use(cors());
const authenticateToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, "DealerShipSecretKey");
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ message: "Invalid token." });
  }
};

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/cars", authenticateToken, carRoutes);

// Start server
const PORT = 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
