const MainDataMenu = require("../../models/MainMenuDataModel");

const getMainMenuController = async (req, res) => {
    try {
        const { restaurantUrl } = req.body;

        // Wyszukiwanie w kolekcji MainDataMenu po restaurantUrl
        const mainMenu = await MainDataMenu.findOne({
            "restaurantData.restaurantUrl": restaurantUrl,
        });

        if (!mainMenu) {
            return res.status(404).json({
                message: "Nie znaleziono menu dla podanego restaurantUrl",
            });
        }

        res.status(200).json({
            message: "Znaleziono menu",
            mainMenu: mainMenu, // Zwróć tylko dane menu
        });
    } catch (error) {
        console.error("Błąd podczas znajdowania menu: ", error);
        res.status(500).json({
            message: "Błąd podczas znajdowania menu",
        });
    }
};

module.exports = getMainMenuController;
