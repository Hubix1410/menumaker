const jwt = require("jsonwebtoken");

const generateToken = (userId, name, email) => {
    return jwt.sign(
        { id: userId, name: name, email: email }, // Payload tokena (dane użytkownika, np. ID)
        process.env.JWT_SECRET, // Klucz do podpisania tokena
        { expiresIn: process.env.JWT_EXPIRES_IN || "1d" } // Czas wygaśnięcia tokena
    );
};

module.exports = generateToken;
