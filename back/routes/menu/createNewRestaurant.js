const express = require("express");
const { createRestaurantController } = require("../../controllers");

const createNewRestaurantEP = express.Router();

createNewRestaurantEP.post("/", createRestaurantController);

module.exports = createNewRestaurantEP;
