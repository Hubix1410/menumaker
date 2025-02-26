module.exports = {
    type: String,
    required: [true, "Imię jest wymagane"], // Pole wymagane z komunikatem
    minlength: [3, "Imię musi mieć co najmniej 3 znaki"], // Minimalna długość
    maxlength: [20, "Imię może mieć maksymalnie 20 znaków"], // Maksymalna długość
    trim: true, // Usuwa białe znaki z początku i końca
    match: [/^[A-Za-z]+$/, "Imię może zawierać tylko litery"], // Walidacja tylko liter
};
