const express = require("express");
const { getBasicMenuController } = require("../../controllers");

const getBasicMenuEP = express.Router();

getBasicMenuEP.post("/", getBasicMenuController);

module.exports = getBasicMenuEP;
