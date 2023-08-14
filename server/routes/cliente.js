const express = require("express");
const pool = require("../dbconnection")
const bodyParser = require("body-parser");
const authMiddleware = require('../middleware');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.route("/cliente").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT * FROM gi_cliente");
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: "Ocurrio un error" });
    }
});

router.route("/eliminarCliente/:email").delete(authMiddleware, async function (req, res) {
    const email_cliente = req.params.email;
    try {
        let res = await pool
            .request()
            .input("email", email_cliente)
            .query("DELETE FROM [dbo].[gi_cliente] WHERE email_cliente = @email")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router