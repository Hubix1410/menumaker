const express = require("express");
const registerEP = require("./auth/register"); // Importowanie ścieżek rejestracji
const loginEP = require("./auth/login"); // Importowanie ścieżek rejestracji
const getMainMenuEP = require("./menu/getMainMenu");
const getBasicMenuEP = require("./menu/getBasicMenu");
const createNewRestaurantEP = require("./menu/createNewRestaurant");

const router = express.Router();

router.use("/auth/register", registerEP);
router.use("/auth/login", loginEP);
router.use("/menu/getMainMenu", getMainMenuEP);
router.use("/menu/getBasicMenu", getBasicMenuEP);
router.use("/menu/createNewRestaurant", createNewRestaurantEP);

module.exports = router;
