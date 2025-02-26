const { v4: uuidv4 } = require("uuid");
const MainDataMenu = require("../../models/MainMenuDataModel");

const createRestaurantController = async (req, res) => {
    try {
        const { userRefId, restaurantName, restaurantCuisines } = req.body;

        // Walidacja danych wejściowych
        if (!userRefId || !restaurantName || !restaurantCuisines) {
            return res.status(400).json({
                message: "Missing req data",
            });
        }

        const restaurantId = uuidv4();

        const restaurantUrl = restaurantName
            .trim()
            .toLowerCase()
            .replaceAll(" ", "-");

        const newRestaurant = {
            userRefId: userRefId,
            restaurantId: restaurantId,
            restaurantName: restaurantName,
            restaurantUrl: restaurantUrl,
            restaurantCuisines: restaurantCuisines,
        };

        const MainMenuData = {
            mainMenuUrl: `${restaurantUrl}/main-menu`,
            mainMenutheme: {
                primaryColor: "#FCFCFC",
                secondaryColor: "#4287f5",
                backgroundColor: "#182e52",
            },
        };

        const newData = new MainDataMenu({
            restaurantData: newRestaurant,
            mainMenu: MainMenuData,
            basicMenus: [],
        });

        await newData.save();

        res.status(200).json({
            message: "Created restaurant succesfully",
            newRestaurant: newData,
        });
    } catch (error) {
        console.error("Error during restaurant creation:", error);
        res.status(500).json({
            message: "Error during restaurant creation",
        });
    }
};

module.exports = createRestaurantController;
