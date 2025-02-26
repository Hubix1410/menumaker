module.exports = {
    type: String,
    required: [true, "Email jest wymagany"],
    unique: true, // Email musi być unikalny
    match: [/\S+@\S+\.\S+/, "Podaj poprawny adres email"], // Walidacja formatu email
};
