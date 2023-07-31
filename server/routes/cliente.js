const express = require("express");
const pool = require("../dbconnection")
const bodyParser = require("body-parser");
const { route } = require("./empresa");

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.route("/cliente").get(async function (req, res) {
    try {
        const result = await pool.request().query("SELECT * FROM gi_cliente");
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: "Ocurrio un error" });
    }
});

router.route("/anadiCliente").post(async function (req, res) {

    const email_cliente = req.body.email_cliente;

    try {
        const result = await pool
            .request()
            .input("email", email_cliente)
            .query("DECLARE @email_corporativo VARCHAR(255) DECLARE @codigo_area VARCHAR(255) DECLARE @nombre_area VARCHAR (255) DECLARE @nombre_completo VARCHAR(255) SELECT @email_corporativo=[email_corporativo],@nombre_completo=[nombre_completo], @codigo_area=[codigo_area], @nombre_area=[nombre_area] FROM [YaEncuestado].[dbo].[gi_colaboradores] WHERE email_corporativo = @email INSERT INTO [dbo].[gi_cliente] ([email_cliente] ,[nombre_cliente] ,[cod_puesto] ,[nombre_puesto]) VALUES (@email_corporativo, @nombre_completo,@codigo_area,@nombre_area)")
        console.log("INSERT WORKINNG", result)
    } catch (error) {
        console.error(error)
    }
})

router.route("/eliminarCliente/:email").delete(async function (req, res) {
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