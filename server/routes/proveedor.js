const express = require("express")
const pool = require("../dbconnection")
const bodyParser = require("body-parser")
const { route } = require("./empresa")

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.route("/proveedor").get(async function (req, res) {
    try {
        const result = await pool.request().query("SELECT * FROM gi_proveedor");
        res.json(result.recordset)
    } catch (error) {
        console.error(err)
        res.status(500).json({ err: "Ocurrio un error" })
    }
})

router.route("/anadirProveedor").post(async function (req, res) {
    const {
        nit,
        nombre_proveedor,
        email_proveedor,
        telefono_proveedor
    } = req.body

    let abreviatura

    if (nombre_proveedor.includes(' ') === true) {
        const lettersPerWord = 1
        const nombreAbreviatura = nombre_proveedor.split(' ')
        abreviatura = nombreAbreviatura.map(word => word.slice(0, lettersPerWord).toUpperCase()).join('');
    }

    try {
        const result = await pool.request()
            .input("nit", nit)
            .input("nombre_proveedor", nombre_proveedor)
            .input("abreviatura", abreviatura)
            .input("email_proveedor", email_proveedor)
            .input("telefono_proveedor", telefono_proveedor)
            .query("INSERT INTO [dbo].[gi_proveedor] ([nit_proveedor] ,[nombre_proveedor] ,[abreviatura_proveedor] ,[email_proveedor] ,[telefono_proveedor]) VALUES(@nit, @nombre_proveedor, @abreviatura, @email_proveedor, @telefono_proveedor)")
        console.log("INSERT WORKING")
    } catch (error) {
        console.log(error)
    }
})

router.route("/editarProveedor").post(async function (req, res) {
    const {
        nit,
        nombre_proveedor,
        email_proveedor,
        telefono_proveedor
    } = req.body

    let abreviatura

    if (nombre_proveedor.includes(' ') === true) {
        const lettersPerWord = 1
        const nombreAbreviatura = nombre_proveedor.split(' ')
        abreviatura = nombreAbreviatura.map(word => word.slice(0, lettersPerWord).toUpperCase()).join('');
    }

    try {
        const result = await pool.request()
            .input("nit", nit)
            .input("nombre_proveedor", nombre_proveedor)
            .input("abreviatura", abreviatura)
            .input("email_proveedor", email_proveedor)
            .input("telefono_proveedor", telefono_proveedor)
            .query("UPDATE [dbo].[gi_proveedor] SET nit_proveedor = @nit, nombre_proveedor = @nombre_proveedor, abreviatura_proveedor = @abreviatura, email_proveedor = @email_proveedor, telefono_proveedor = @telefono_proveedor WHERE nit_proveedor = @nit")
        console.log("UPDATE WORKING")
    } catch (error) {
        console.log(error)
    }
})

router.route("/eliminarProveedor/:email").delete(async function (req, res) {
    const email_proveedor = req.params.email
    try {
        let res = await pool.request()
            .input("email", email_proveedor)
            .query("DELETE FROM [dbo].[gi_proveedor] WHERE email_proveedor = @email")
        console.log("DELETE WORKING")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router