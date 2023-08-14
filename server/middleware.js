// authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {

    const token = req.header('Authorization');
    console.log(token);
    const accessToken = token.split(" ", 2)[1]
    console.log(accessToken);

    if (!accessToken) {
        console.log("No hay token");
        return res.status(401).json({ message: 'Access denied. Token missing.' });
    }

    try {
        const decoded = jwt.verify(accessToken, 'alejo123');
        req.user = decoded;
        next();
    } catch (error) {
        console.log("Token invalido");
        res.status(400).json({ message: 'Invalid token.' });
    }
};
