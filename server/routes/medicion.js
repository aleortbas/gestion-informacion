const express = require("express")
const pool = require("../dbconnection")
const bodyParser = require("body-parser")
const authMiddleware = require('../middleware');

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.route("/medicion").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT * FROM gi_medicion")
        res.json(result.recordset)
    } catch (error) {
        console.error(error)
    }
})

router.route("/anadirMedicion").post(authMiddleware, async function (req, res) {
    const {
        id_proyecto,
        email_cliente,
        no_contrato,
        nit,
        presupuesto,
        muestra,
        fechaInicio,
        fechaFin
    } = req.body
    try {
        const result = await pool.request()
            .input("id_proyecto", id_proyecto)
            .input("email_cliente", email_cliente)
            .input("no_contrato", no_contrato)
            .input("nit", nit)
            .input("presupuesto", presupuesto)
            .input("muestra", muestra)
            .input("fecha_inicio", fechaInicio)
            .input("fecha_fin", fechaFin)
            .query("INSERT INTO [dbo].[gi_medicion]([id_medicion],[id_proyecto_historico],[email_cliente],[no_contrato],[nit_proveedor],[responsable_conocimiento],[presupuesto],[muestra],[fecha_inicio],[fecha_fin])VALUES('Por definir', @id_proyecto, @email_cliente, @no_contrato, @nit, 'Por definir', @presupuesto, @muestra, @fecha_inicio, @fecha_fin)")
        console.log("INSERT WORKING")
    } catch (error) {
        console.error(error)
    }
})

router.route("/editarMedicion").post(authMiddleware, async function (req, res) {
    const {
        id_medicion,
        id_proyecto,
        email_cliente,
        no_contrato,
        nit,
        presupuesto,
        muestra,
        fechaInicio,
        fechaFin
    } = req.body
    try {
        const result = await pool.request()
            .input("id_medicion", id_medicion)
            .input("id_proyecto", id_proyecto)
            .input("email_cliente", email_cliente)
            .input("no_contrato", no_contrato)
            .input("nit", nit)
            .input("presupuesto", presupuesto)
            .input("muestra", muestra)
            .input("fecha_inicio", fechaInicio)
            .input("fecha_fin", fechaFin)
            .query("UPDATE [dbo].[gi_medicion]SET [email_cliente] = @email_cliente ,[no_contrato] = @no_contrato ,[nit_proveedor] = @nit ,[responsable_conocimiento] = 'Por definir' ,[presupuesto] = @presupuesto,[muestra] = @muestra ,[fecha_inicio] = @fecha_inicio,[fecha_fin] = @fecha_fin WHERE id_medicion = @id_medicion")
        console.log("UPDATE WORKING")
    } catch (error) {
        console.error(error)
    }
})

router.route("/eliminarMedicion/:idMedicion").delete(authMiddleware, async function (req, res) {
    const idMedicion = req.params.idMedicion
    try {
        const result = await pool.request()
            .input("id_medicion", idMedicion)
            .query("DELETE FROM [dbo].[gi_medicion] WHERE id_medicion = @id_Medicion")
        console.log("DELETE MEDICION")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router