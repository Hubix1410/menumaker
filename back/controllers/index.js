const loginUserController = require("./auth/login/loginController");
const registerUserController = require("./auth/register/registerController");
const getBasicMenuController = require("./menu/getBasicMenuController");
const getMainMenuController = require("./menu/getMainMenuController");
const createRestaurantController = require("./menu/createRestaurantController");

module.exports = {
    registerUserController,
    loginUserController,
    getMainMenuController,
    getBasicMenuController,
    createRestaurantController,
};
