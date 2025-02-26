module.exports = {
    type: String,
    required: [true, "Restaurant name is required"],
    minlength: [3, "Restaurant name must be at least 3 characters long"],
    maxlength: [20, "Restaurant name can be at most 20 characters long"],
    trim: true,
    match: [
        /^[A-Za-z0-9 ]+$/,
        "Restaurant name can only contain letters, numbers, and spaces",
    ],
    uniqe: true,
};
