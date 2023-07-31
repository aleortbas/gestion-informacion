const express = require("express");
const pool = require("../dbconnection")
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    const {
        email,
        password
    } = req.body

    try {
        const result = await pool.request()
            .input("email", email)
            .input("password", password)
            .query("SELECT * FROM gi_cliente WHERE email_cliente =@email AND contraseña =@password")
        const user = { email: email };

        const count = result.recordset[0];
        //console.log(count)

        if (count != null) {
            const accessToken = generateAccesToken(user);
            //console.log("TOKEN: ", accessToken);
            res.json(accessToken)
        } else {
            res.json(null)
        }

    } catch (error) {
        console.log(error)
    }
})

function generateAccesToken(user) {
    return jwt.sign(user, process.env.SECRET, { expiresIn: '5m' });
}

module.exports = router;