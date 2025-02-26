const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {
    userAccountStatusField,
    userIdField,
    userPasswordField,
    userEmailField,
    userNameField,
    restaurantRefId,
} = require("./fields");

const userSchema = new mongoose.Schema(
    {
        name: userNameField,
        email: userEmailField,
        password: userPasswordField,
        userId: userIdField,
        accountStatus: userAccountStatusField,
        restaurantRefId: restaurantRefId,
    },
    { timestamps: true }
);

// Hook przed zapisaniem, który hashuje hasło
userSchema.pre("save", async function (next) {
    // Sprawdzamy, czy hasło zostało zmienione
    if (!this.isModified("password")) return next();

    try {
        // Hashowanie hasła za pomocą bcrypt
        const salt = await bcrypt.genSalt(10); // Generowanie soli
        this.password = await bcrypt.hash(this.password, salt); // Hashowanie hasła
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model("User", userSchema);
