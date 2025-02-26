module.exports = {
    type: String,
    required: [true, "Menu name is required"],
    minlength: [3, "Menu name must be at least 3 characters long"],
    maxlength: [20, "Menu name can be at most 20 characters long"],
    trim: true,
    match: [
        /^[A-Za-z0-9 ]+$/,
        "Menu name can only contain letters, numbers, and spaces",
    ],
};
