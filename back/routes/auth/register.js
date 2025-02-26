const express = require("express");
const { registerUserController } = require("../../controllers/");

const registerEP = express.Router();

registerEP.post("/", registerUserController);

module.exports = registerEP;
