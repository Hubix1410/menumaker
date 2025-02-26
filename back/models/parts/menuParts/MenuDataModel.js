const mongoose = require("mongoose");

const RestaurantDataModel = new mongoose.Schema({
    mainMenuUrl: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[a-z0-9-]+$/,
            "Menu URL może zawierać tylko małe litery, cyfry oraz myślniki",
        ],
    },
});

module.exports = RestaurantDataModel;
