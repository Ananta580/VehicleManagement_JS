const testMethod = (req, res) => {
  res.status(200).json({
    message: "This is a dummy controller response",
  });
};

module.exports = {
  testMethod,
};
