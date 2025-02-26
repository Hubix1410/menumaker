module.exports = {
    type: String,
    required: [true, "menu type is required"],
    enum: {
        // Dozwolone wartości
        values: ["main", "basic"],
        message: "menu type must be MAIN or BASIC",
    },
};
