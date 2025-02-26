const jwt = require("jsonwebtoken");
const User = require("../../models/UserModel");

const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            return res.status(401).json({ message: "Nieautoryzowany dostęp" });
        }
    } else {
        return res.status(401).json({ message: "Brak tokena" });
    }
};

module.exports = protect;
