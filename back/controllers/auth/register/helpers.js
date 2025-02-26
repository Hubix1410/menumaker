function generateBasicRestaurantData(
    generatedId,
    restaurantName,
    restaurantType
) {
    const restaurantUrl = restaurantName
        .trim()
        .toLowerCase()
        .replaceAll(" ", "-");

    return {
        restaurantData: {
            userId: generatedId.userId,
            restaurantId: generatedId.restaurantId,
            restaurantName: restaurantName,
            restaurantUrl: restaurantUrl,
            restaurantType: restaurantType,
        },
        mainMenu: {
            menuData: {
                userId: generatedId.userId,
                menuId: generatedId.mainMenuId,
                restaurantUrl: restaurantUrl,
                menuName: "menu list",
                menuUrl: "menu-list",
                isMainMenu: true,
            },
            theme: {
                primaryColor: "#FF5733",
                secondaryColor: "#C70039",
                backgroundColor: "#C70039",
            },
        },
        basicMenu: {
            menuData: {
                userId: generatedId.userId,
                menuId: generatedId.basicMenuId,
                restaurantUrl: restaurantUrl,
                menuName: "menu list",
                menuUrl: "menu-list",
                isMainMenu: true,
            },
            theme: {
                primaryColor: "#FF5733",
                secondaryColor: "#C70039",
                backgroundColor: "#FCFCFC",
            },
            items: [],
        },
    };
}

module.exports = { generateBasicRestaurantData };
