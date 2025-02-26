const cuisnes = require("../../../utilities");

module.exports = {
    type: [String], // Tablica typów restauracji
    required: [true, "At least one restaurant type is required"],
    validate: {
        validator: function (types) {
            // Sprawdź, czy liczba typów nie przekracza 3
            if (types.length > 3) {
                return false;
            }
            // Sprawdź, czy każdy typ znajduje się na liście dozwolonych wartości
            // return types.every((type) => cuisnes.includes(type));
        },
        message: `Restaurant cuisnes must be one of the following: ${cuisnes}}}`,
    },
};
