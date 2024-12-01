const express = require("express");
const testingController = require("../controllers/testingController");

const router = express.Router();

router.get("/dummy", testingController.testMethod);

module.exports = router;
