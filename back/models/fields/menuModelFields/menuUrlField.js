module.exports = {
    type: String,
    required: [true, "menu url is required"],
    unique: true,
    match: [
        /^[a-z0-9-/]+$/,
        "menu URL can only contain lowercase letters, numbers, and dashes",
    ],
};
