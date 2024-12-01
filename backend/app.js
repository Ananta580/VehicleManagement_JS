const express = require('express');
const mongoose = require('mongoose');
const carRoutes = require('./routes/carRoutes');

const app = express();

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/dealership';
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error(err));

// Middleware
app.use(express.json());
app.use('/api/cars', carRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
