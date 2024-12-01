const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const testRoutes = require("./routes/testRoute");
const userRoutes = require("./routes/userRoute");

const app = express();
const port = process.env.PORT || 5555;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = "mongodb://localhost:27017/vehicleDB";
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
app.use("/test", testRoutes);
app.use("/auth", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
