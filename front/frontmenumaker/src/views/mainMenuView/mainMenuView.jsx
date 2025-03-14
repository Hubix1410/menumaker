import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMainMenu } from "../../api/";

function MainMenuView() {
    const { restaurantUrl } = useParams(); // Pobranie dynamicznego segmentu z URL
    const [menuDisplayData, setMenuDisplayData] = useState(null); // Stan na dane menu
    const [loading, setLoading] = useState(true); // Stan na ładowanie danych
    const [error, setError] = useState(null); // Stan na przechowywanie błędów

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                setLoading(true); // Ustawienie stanu ładowania
                const data = await getMainMenu(restaurantUrl); // Pobranie menu z API
                setMenuDisplayData(data); // Zapisanie danych w stanie
            } catch (err) {
                console.error("Błąd podczas pobierania menu:", err);
                setError(err.message || "Wystąpił błąd");
            } finally {
                setLoading(false); // Zakończenie ładowania
            }
        };

        fetchMenu(); // Wywołanie funkcji
    }, [restaurantUrl]); // Efekt będzie uruchamiany, gdy restaurantUrl się zmieni

    if (loading) {
        return <p>Ładowanie menu...</p>;
    }

    if (error) {
        return <p>Błąd: {error}</p>;
    }

    return (
        <div>
            <h1>Main Menu View</h1>
            <div>
                {menuDisplayData ? (
                    <pre>{JSON.stringify(menuDisplayData, null, 2)}</pre>
                ) : (
                    <p>Nie znaleziono menu</p>
                )}
            </div>
        </div>
    );
}

export default MainMenuView;
