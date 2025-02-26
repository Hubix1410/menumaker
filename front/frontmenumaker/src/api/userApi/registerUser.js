import axios from "axios";
import { USER_API } from "../apiList";

const registerUser = async (email, name, password) => {
    event.preventDefault();
    try {
        // Wysyłanie żądania POST do API
        const response = await axios.post(USER_API.REGISTER_API, {
            name,
            email,
            password,
        });

        console.log(response.data);

        // Zwracanie danych użytkownika
        return {
            success: true,
            user: response.data.user,
        };
    } catch (error) {
        // Obsługa błędów
        console.error("Błąd rejestracji:", error);
        console.log(error.response?.data?.message);
        return {
            success: false,
            message: error.response?.data?.message || "Nie udało się zalogować",
        };
    }
};

export { registerUser };
