import axios from "axios";
import { login } from "../../features/user/userSlice.js";
import { USER_API } from "../apiList";

const loginUser = async (email, password, dispatch, navigate) => {
    event.preventDefault();

    try {
        // Wysyłanie żądania POST do API
        const response = await axios.post(USER_API.LOGIN_API, {
            email,
            password,
        });

        console.log(response.data);

        const { user, token } = response.data;

        // Zapisz token w localStorage
        localStorage.setItem("token", token);

        // Aktualizuj Redux
        dispatch(login({ user, token }));

        // Zwracanie danych użytkownika
        navigate("/dashboard");
    } catch (error) {
        // Obsługa błędów
        console.error("Błąd logowania:", error);
        console.log(error.response?.data?.message);
        return {
            success: false,
            message: error.response?.data?.message || "Nie udało się zalogować",
        };
    }
};

export { loginUser };
