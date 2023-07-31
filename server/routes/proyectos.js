const express = require("express")
const pool = require("../dbconnection")
const bodyParser = require("body-parser")

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.route("/proyecto").get(async function (req, res) {
    try {
        const result = await pool.request().query("SELECT * FROM gi_proyecto")
        res.json(result.recordset)
    } catch (error) {
        console.error(error)
    }
})

router.route("/anadirProyecto").post(async function (req, res) {
    const {
        id_subarea,
        nombre_proyecto,
        abreviatura,
        fecha_inicio,
        periodicidad
    } = req.body

    console.log(fecha_inicio)

    try {
        const result = await pool.request()
            .input("nombreProyecto", nombre_proyecto)
            .input("abreviatura", abreviatura)
            .input("fecha_inicio", fecha_inicio)
            .input("periodicdad", periodicidad)
            .input("idSubarea", id_subarea)
            .query("INSERT INTO [dbo].[gi_proyecto]([nombre_proyecto],[abreviatura_proyecto],[tipo_estudio],[fecha_inicio_proyecto],[conteo_total_mediciones],[conteo_ideal_mediciones],[periodicidad],[id_subarea])VALUES(@nombreProyecto, @abreviatura, 'Por definir', @fecha_inicio, '0', '0', @periodicdad, @idSubarea)")
        console.log("INSERT WORKING")
    } catch (error) {
        console.error(error)
    }
})

router.route("/editarProyecto").post(async function (req, res) {
    const {
        id_proyecto,
        id_subarea,
        nombre_proyecto,
        abreviatura,
        periodicidad,
        tipoEstudio,
        conteoTotal
    } = req.body
    try {
        const result = await pool.request()
            .input("idProyecto", id_proyecto)
            .input("idSubarea", id_subarea)
            .input("nombreProyecto", nombre_proyecto)
            .input("abreviatura", abreviatura)
            .input("periodicidad", periodicidad)
            .input("tipoEstudio", tipoEstudio)
            .input("conteoTotal", conteoTotal)
            .query("UPDATE [dbo].[gi_proyecto] SET [id_subarea] = @idSubarea, [nombre_proyecto] = @nombreProyecto, [abreviatura_proyecto] = @abreviatura, [tipo_estudio] = @tipoEstudio, [conteo_total_mediciones] = @conteoTotal,  [periodicidad] = @periodicidad WHERE id_proyecto_historico = @idProyecto")
        console.log("UPDATE WORKING")
    } catch (error) {
        console.error(error)
    }
})

router.route("/eliminarProyecto/:idProyecto").delete(async function (req, res) {
    const idProyecto = req.params.idProyecto
    try {
        let res = await pool.request()
            .input("idProyecto", idProyecto)
            .query("DELETE FROM [dbo].[gi_proyecto] WHERE id_proyecto_historico = @idProyecto")
        console.log("DELETE WORKING")
    } catch (error) {
        console.error(error)
    }
})

module.exports = router