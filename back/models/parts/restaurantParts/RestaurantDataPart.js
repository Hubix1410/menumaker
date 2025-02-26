const mongoose = require("mongoose");
const {
    restaurantIdField,
    restaurantNameField,
    restaurantUrlField,
    restaurantCuisinesField,
    userRefId,
} = require("../../fields");

const RestaurantDataSchema = new mongoose.Schema({
    userRefId: userRefId,
    restaurantId: restaurantIdField,
    restaurantName: restaurantNameField,
    restaurantUrl: restaurantUrlField,
    restaurantCuisines: restaurantCuisinesField,
});

module.exports = RestaurantDataSchema;
