import axios from "axios";
import { MENU_API } from "../apiList";

async function getBasicMenu(restaurantUrl, menuUrl) {
    try {
        console.log(restaurantUrl, menuUrl);

        // Wysyłanie żądania POST do API
        const response = await axios.post(MENU_API.BASIC_MENU_API, {
            restaurantUrl: restaurantUrl,
            menuUrl: menuUrl,
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        // Obsługa błędów
        console.error("Błąd wczytywania menu:", error);
        console.log(error.response?.data?.message);
        return {
            success: false,
            message:
                error.response?.data?.message || "Nie udało się wczytać menu",
        };
    }
}

export { getBasicMenu };
