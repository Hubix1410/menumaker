const mongoose = require("mongoose");
const User = require("../../../models/UserModel");
const { v4: uuidv4 } = require("uuid");

const registerUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Walidacja danych wejściowych
        if (!name || !email || !password) {
            return res.status(400).json({
                message:
                    "Proszę podać wszystkie wymagane dane: name, email, password",
            });
        }

        // Generowanie unikalnego ID użytkownika
        const userId = uuidv4();

        // Tworzenie nowego użytkownika
        const newUser = new User({
            name,
            email,
            password,
            userId,
        });

        // Zapis użytkownika do bazy danych w ramach transakcji
        await newUser.save();

        // Sukces
        res.status(201).json({
            message: "Użytkownik został stworzony pomyślnie",
            userId: newUser.userId,
        });
    } catch (error) {
        console.error("Błąd w transakcji:", error);

        // Obsługa błędu MongoDB związana z unikalnym indeksem (np. zduplikowany email)
        if (error.code === 11000) {
            const duplicatedField = Object.keys(error.keyValue)[0];
            return res.status(400).json({
                message: `Podany ${duplicatedField} jest już zajęty`,
            });
        }

        // Obsługa błędów walidacji Mongoose
        if (error.name === "ValidationError") {
            const errors = Object.values(error.errors).map(
                (err) => err.message
            );
            return res.status(400).json({
                message: "Błąd walidacji",
                errors,
            });
        }
        res.status(500).json({
            message: "Wystąpił błąd podczas tworzenia użytkownika",
            error: error.message,
            stack: error.stack,
        });
    }
};

module.exports = registerUserController;
