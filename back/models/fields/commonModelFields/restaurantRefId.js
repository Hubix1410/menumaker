const mongoose = require("mongoose");

module.exports = {
    type: [mongoose.Schema.Types.ObjectId], // Tablica ObjectId, referencje do dokumentów w kolekcji "Restaurant"
    ref: "Restaurant", // Referencja do kolekcji Restaurant
    validate: {
        validator: function (restaurants) {
            return restaurants.length <= 3; // Maksymalnie 3 restauracje
        },
        message: "A user can only have up to 3 restaurants",
    },
    default: [], // Domyślnie pusta tablica
};
