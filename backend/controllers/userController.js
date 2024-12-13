const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, email, password, address, phone } = req.body;
    const user = new User({ username, email, password, address, phone });
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// Login a user
exports.login = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (!user) {
      return res.status(400).send({ error: "Invalid email or password" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send({ error: "Invalid email or password" });
    }
    const token = jwt.sign({ _id: user._id }, "DealerShipSecretKey", {
      expiresIn: "30 days",
    });
    res.send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
