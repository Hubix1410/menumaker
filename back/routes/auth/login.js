const express = require("express");
const { loginUserController } = require("../../controllers/");

const loginEP = express.Router();

loginEP.post("/", loginUserController);

module.exports = loginEP;
