const mongoose = require("mongoose");
const {
    MenuItemSchema,
    MenuThemeSchema,
    RestaurantDataSchema,
    MenuDataSchema,
} = require("./parts");
const { menuUrlField } = require("./fields");

const MainDataMenuModel = new mongoose.Schema(
    {
        restaurantData: RestaurantDataSchema,
        mainMenu: {
            mainMenuUrl: menuUrlField,
            mainMenutheme: MenuThemeSchema,
        },
        basicMenus: {
            type: [
                {
                    menuData: MenuDataSchema,
                    items: [MenuItemSchema],
                    theme: MenuThemeSchema,
                },
            ],
            validate: {
                validator: function (basicMenus) {
                    return basicMenus.length <= 3; // Maksymalnie 3 rekordy
                },
                message: "Pole basicMenu może zawierać maksymalnie 3 rekordy",
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("MainDataMenu", MainDataMenuModel);
