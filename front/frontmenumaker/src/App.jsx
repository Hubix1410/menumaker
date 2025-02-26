import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import {
    RegisterView,
    LoginView,
    DashboardView,
    MainView,
    MainMenuView,
    BasicMenuView,
} from "./views";
import { GuestRoute, ProtectedRoute } from "./components";
import "./App.css";
import { useDispatch } from "react-redux";
import { loadUserFromStorage } from "./features/user/userSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserFromStorage());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route
                    path="/register"
                    element={
                        <GuestRoute>
                            <RegisterView />
                        </GuestRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <GuestRoute>
                            <LoginView />
                        </GuestRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardView />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="restaurant/:restaurantUrl/main-menu"
                    element={<MainMenuView />}
                />
                <Route
                    path="restaurant/:restaurantUrl/basic-menu/:menuUrl"
                    element={<BasicMenuView />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
