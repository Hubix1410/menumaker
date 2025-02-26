module.exports = {
    type: String,
    required: [true, "Restaurant url is required"],
    unique: true,
    match: [
        /^[a-z0-9-]+$/,
        "Restaurant URL can only contain lowercase letters, numbers, and dashes",
    ],
};
