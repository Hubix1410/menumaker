const express = require("express");
const { getMainMenuController } = require("../../controllers");

const getMainMenuEP = express.Router();

getMainMenuEP.post("/", getMainMenuController);

module.exports = getMainMenuEP;
