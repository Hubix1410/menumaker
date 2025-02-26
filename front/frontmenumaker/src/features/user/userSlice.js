import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialState = {
    user: null, // Informacje o zalogowanym użytkowniku
    token: null, // Token JWT
    isLoggedIn: false, // Status logowania
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            localStorage.removeItem("token"); // Usuń token z localStorage
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        },
        loadUserFromStorage(state) {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const decoded = jwtDecode(token);
                    state.user = {
                        id: decoded.id,
                        name: decoded.name,
                        email: decoded.email,
                    };
                    state.token = token;
                    state.isLoggedIn = true;
                } catch (error) {
                    console.error("Błąd dekodowania tokena:", error);
                    state.user = null;
                    state.token = null;
                    state.isLoggedIn = false;
                }
            }
        },
    },
});

export const { login, logout, loadUserFromStorage } = userSlice.actions; // Eksportowanie akcji
export default userSlice.reducer; // Eksportowanie reduktora
