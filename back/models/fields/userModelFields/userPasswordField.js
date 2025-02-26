module.exports = {
    type: String,
    required: [true, "Hasło jest wymagane"],
    validate: {
        validator: function (value) {
            // Wyrażenie regularne dla hasła
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
        },
        message:
            "Hasło musi mieć co najmniej 8 znaków, zawierać co najmniej jedną wielką literę, jedną małą literę i jedną cyfrę",
    },
};
