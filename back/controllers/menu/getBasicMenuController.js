const MainDataMenu = require("../../models/MainMenuDataModel");

const getBasicMenuController = async (req, res) => {
    try {
        const { restaurantUrl, menuUrl } = req.body;

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
            message: "Znaleziono menu basic",
            mainMenu: mainMenu, // Zwróć tylko dane menu
        });
    } catch (error) {
        console.error("Błąd podczas znajdowania menu basic: ", error);
        res.status(500).json({
            message: "Błąd podczas znajdowania menu basic",
        });
    }
};

module.exports = getBasicMenuController;
