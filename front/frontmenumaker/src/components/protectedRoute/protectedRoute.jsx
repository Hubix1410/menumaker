import React from "react";
import { useSelector } from "react-redux"; // Aby sprawdzić, czy użytkownik jest zalogowany
import { Navigate } from "react-router-dom"; // Przekierowanie użytkownika

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // Pobierz status logowania

    if (!isLoggedIn) {
        // Jeśli użytkownik nie jest zalogowany, przekieruj na stronę logowania
        return <Navigate to="/login" replace />;
    }

    // Jeśli użytkownik jest zalogowany, renderuj chronioną stronę
    return children;
};

export default ProtectedRoute;
