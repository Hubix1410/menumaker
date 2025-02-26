require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes");
const cors = require("cors");

const app = express();

// Middleware do parsowania JSON
app.use(express.json());

// Domyślnie zezwala na wszystkie pochodzenia (origins)
app.use(cors());

// Połączenie z bazą danych
connectDB();

// Definicja portu
const PORT = process.env.PORT || 5000;

// Użycie routera
app.use("/api", router);

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
