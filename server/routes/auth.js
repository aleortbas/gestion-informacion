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

        const user = { email: email };
        const count = result.recordset[0];

        console.log(user);

        const isMatch = await bcrypt.compare(password, passwordQuery)

        if (isMatch === true) {
            if (count != null) {
                const token = jwt.sign(user, process.env.SECRET, { expiresIn: "1h" })
                console.log("TOKEN: ", token);
                res.json(token);
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
        password,
        nombre,
        nombrePuesto,
        codigoArea
    } = req.body
    const rounds = 10

    console.log("nombre: ", nombre, " nombre puesto: ", nombrePuesto, " codigoArea: ", codigoArea);

    bcrypt.hash(password, rounds, async (err, hash) => {
        if (err) {
            console.error(err);
            return;
        }

        try {
            const result = await pool.request()
                .input("email", email)
                .input("password", hash)
                .input("nombre", nombre)
                .input("nombrePuesto", nombrePuesto)
                .input("codigoArea", codigoArea)
                .query("INSERT INTO [dbo].[gi_cliente]([email_cliente],[contraseña],[nombre_cliente],[nombre_puesto],[id_subarea])VALUES(@email, @password, @nombre, @nombrePuesto, @codigoArea)")

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
    return jwt.sign({ user }, 'process.env.SECRET', { expiresIn: '5m' });
}

module.exports = router;