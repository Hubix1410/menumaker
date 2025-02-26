const mongoose = require("mongoose");
const { colorThemeField } = require("../../fields");

const MenuThemeSchema = new mongoose.Schema({
    primaryColor: colorThemeField,
    secondaryColor: colorThemeField,
    backgroundColor: colorThemeField,
});

module.exports = MenuThemeSchema;
