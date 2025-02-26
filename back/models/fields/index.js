// MENU FIELDS
const menuIdField = require("./menuModelFields/menuIdField");
const menuNameField = require("./menuModelFields/menuNameField");
const menuTypeField = require("./menuModelFields/menuTypeField");
const menuUrlField = require("./menuModelFields/menuUrlField");

// RESTAURANT FIELDS

const restaurantCuisinesField = require("./restaurantModelFields/restaurantCuisinesField");
const restaurantNameField = require("./restaurantModelFields/restaurantNameField");
const restaurantIdField = require("./restaurantModelFields/restaurantIdField");
const restaurantUrlField = require("./restaurantModelFields/restaurantUrlField");

// ITEM FIELDS

// THEME FIELDS
const colorThemeField = require("./themeModelFields/colorThemeField");

// USER FIELDS
const userIdField = require("./userModelFields/userIdField");
const userNameField = require("./userModelFields/userNameField");
const userEmailField = require("./userModelFields/userEmailField");
const userPasswordField = require("./userModelFields/userPasswordField");
const userAccountStatusField = require("./userModelFields/userAccountStatusField");

// COMMON FIELDS
const userRefId = require("./commonModelFields/userRefIdField");
const restaurantRefId = require("./commonModelFields/restaurantRefId");

module.exports = {
    // MENU FIELDS
    menuIdField,
    menuNameField,
    menuTypeField,
    menuUrlField,

    // MENU FIELDS
    restaurantCuisinesField,
    restaurantNameField,
    restaurantIdField,
    restaurantUrlField,
    colorThemeField,

    // USER FIELDS
    userEmailField,
    userIdField,
    userNameField,
    userPasswordField,
    userAccountStatusField,

    // THEME FIELDS
    colorThemeField,

    // COMMON FIELDS
    userRefId,
    restaurantRefId,
};
