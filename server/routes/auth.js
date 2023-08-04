const express = require("express");
const pool = require("../dbconnection")
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.route("/auth").post(async (req, res) => {
    const {
        email,
        password
    } = req.body

    try {
        const result = await pool.request()
            .input("email", email)
            .input("password", password) // Use the hashed password in the SQL query
            .query("SELECT * FROM gi_cliente WHERE email_cliente = @email");

        const passwordQuery = result.recordset[0].contraseña
        console.log(passwordQuery);
        console.log(password);
        const user = { email: email };
        const count = result.recordset[0];

        const isMatch = await bcrypt.compare(password, passwordQuery)
        console.log(isMatch);

        if (isMatch === true) {
            if (count != null) {
                const accessToken = generateAccesToken(user);
                res.json(accessToken);
            }
        } else {
            res.json(null)
            console.log("contraseña equivocada");
        }

    } catch (error) {
        console.log(error);
    }

})

router.route("/registro").post(async function (req, res) {
    const {
        email,
        password
    } = req.body
    const rounds = 10

    bcrypt.hash(password, rounds, async (err, hash) => {
        if (err) {
            console.error(err);
            return;
        }

        try {
            const result = await pool.request()
                .input("email", email)
                .input("password", hash)
                .query("INSERT INTO gi_cliente (email_cliente, contraseña, nombre_cliente, cod_puesto, nombre_puesto, familia_cargo, tipo_usuario, id_subarea) SELECT email_corporativo AS email_cliente,@password AS contraseña,nombre_cliente AS nombre_cliente,cod_puesto,nombre_puesto,familia_cargo,'1' AS tipo_usuario, id_subarea FROM gi_colaboradores WHERE email_corporativo = @email;")

            const user = { email: email }
            const count = result.rowsAffected[0]

            if (count === 1) {
                const accessToken = generateAccesToken(user)
                res.json(accessToken)
                console.log(accessToken)
            } else {
                res.json(null)
            }

            console.log("COUNT", count)
            console.log("RESULT", result)
        } catch (error) {
            console.log(error)
        }
    })
})

function generateAccesToken(user) {
    return jwt.sign(user, process.env.SECRET, { expiresIn: '5m' });
}

module.exports = router;