module.exports = {
    type: String,
    required: true,
    match: [/^#[0-9A-Fa-f]{6}$/, "Color needs to be in HEX format"],
};
