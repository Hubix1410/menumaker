const User = require("../../../models/UserModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../../utilities");

const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Sprawdzenie, czy wszystkie pola są wypełnione
        if (!email || !password) {
            return res.status(400).json({
                message: "Proszę podać email i hasło",
            });
        }

        // Sprawdzenie, czy użytkownik istnieje
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "Użytkownik z podanym adresem email nie istnieje",
            });
        }

        // Porównanie hasła
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Nieprawidłowe hasło",
            });
        }

        // Wygeneruj token JWT
        const token = generateToken(user.id, user.name, user.email);

        // Zwracanie odpowiedzi
        res.status(200).json({
            message: "Logowanie zakończone sukcesem",
            user: {
                id: user.userId,
                name: user.name,
                email: user.email,
                restaurantRefId: user.restaurantRefId,
            },
            token,
        });
    } catch (error) {
        console.error("Błąd podczas logowania użytkownika:", error);
        res.status(500).json({
            message: "Wystąpił błąd podczas logowania użytkownika",
        });
    }
};

module.exports = loginUserController;
