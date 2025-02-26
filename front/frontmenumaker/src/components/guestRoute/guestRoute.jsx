import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // Pobierz status logowania

    if (isLoggedIn) {
        // Jeśli użytkownik jest zalogowany, przekieruj go np. na dashboard
        return <Navigate to="/dashboard" replace />;
    }

    // Jeśli użytkownik NIE jest zalogowany, renderuj stronę (np. login lub rejestrację)
    return children;
};

export default GuestRoute;
