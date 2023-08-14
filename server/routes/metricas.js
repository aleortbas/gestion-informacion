const express = require("express")
const pool = require("../dbconnection")
const bodyParser = require("body-parser")
const { route } = require("./medicion")
const authMiddleware = require('../middleware');

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.route("/cargoSolicitado").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT YEAR(fecha_inicio) AS año, nombre_puesto, COUNT(*) AS cantidad_proyectos FROM gi_medicion JOIN gi_cliente ON gi_medicion.email_cliente = gi_cliente.email_cliente GROUP BY YEAR(fecha_inicio),nombre_puesto HAVING COUNT(*) = (SELECT MAX(cantidad_proyectos) FROM(SELECT YEAR(fecha_inicio) AS año, nombre_puesto,COUNT(*) AS cantidad_proyectos FROM gi_medicion JOIN gi_cliente ON gi_medicion.email_cliente = gi_cliente.email_cliente GROUP BY YEAR(fecha_inicio),nombre_puesto) AS proyectos_por_cargo WHERE proyectos_por_cargo.año = YEAR(gi_medicion.fecha_inicio));")
        res.json(result.recordset)
        //console.log(result)
    } catch (error) {
        console.error(error)
    }
})

router.route("/subareaSolicitado").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT gi_empresa.nombre_subarea,gi_proyecto.id_subarea, COUNT(*) as proyectos  FROM gi_proyecto  JOIN gi_empresa ON gi_proyecto.id_subarea = gi_empresa.id_subarea  GROUP BY gi_empresa.nombre_subarea, gi_proyecto.id_subarea  ORDER BY proyectos DESC ")
        res.json(result.recordset)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
})

router.route("/totalProyectos").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT YEAR(fecha_inicio) AS año, nombre_puesto, COUNT(*) AS cantidad_proyectos FROM gi_medicion JOIN gi_cliente ON gi_medicion.email_cliente = gi_cliente.email_cliente GROUP BY YEAR(fecha_inicio),nombre_puesto HAVING COUNT(*) = (SELECT MAX(cantidad_proyectos) FROM(SELECT YEAR(fecha_inicio) AS año, nombre_puesto,COUNT(*) AS cantidad_proyectos FROM gi_medicion JOIN gi_cliente ON gi_medicion.email_cliente = gi_cliente.email_cliente GROUP BY YEAR(fecha_inicio),nombre_puesto) AS proyectos_por_cargo WHERE proyectos_por_cargo.año = YEAR(gi_medicion.fecha_inicio));")
        res.json(result.recordset)
        //console.log(result)
    } catch (error) {
        console.error(error)
    }
})

router.route("/subareaSolicitado").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT gi_empresa.nombre_subarea,gi_proyecto.id_subarea, COUNT(*) as proyectos  FROM gi_proyecto  JOIN gi_empresa ON gi_proyecto.id_subarea = gi_empresa.id_subarea  GROUP BY gi_empresa.nombre_subarea, gi_proyecto.id_subarea  ORDER BY proyectos DESC ")
        res.json(result.recordset)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
})

router.route("/totalProyectos").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT COUNT(*) AS total_proyectos  FROM gi_proyecto; ")
        res.json(result.recordset)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
})

router.route("/totalMediciones").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT COUNT(*) AS total_mediciones FROM gi_medicion;")
        res.json(result.recordset)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
})

router.route("/proyectoMasMediciones").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT gi_proyecto.id_proyecto_historico, gi_proyecto.nombre_proyecto, COUNT(*) AS total_mediciones  FROM gi_medicion  JOIN gi_proyecto ON gi_medicion.id_proyecto_historico = gi_proyecto.id_proyecto_historico  GROUP BY gi_proyecto.id_proyecto_historico, gi_proyecto.nombre_proyecto  ORDER BY total_mediciones DESC ")
        res.json(result.recordset)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
})

router.route("/periodicidadRepetida").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT periodicidad, COUNT(*) AS conteo  FROM gi_proyecto  GROUP BY periodicidad  ORDER BY conteo DESC  ")
        res.json(result.recordset)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
})

router.route("/asociadosEncuestdosAños").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT COUNT(*) AS cantidad_documentos FROM gi_ya_encuestados WHERE estado = 2 AND YEAR(fecha_contacto) = 2022;   ")
        res.json(result.recordset)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
})

router.route("/proveedorMasSolicitado").get(authMiddleware, async function (req, res) {
    try {
        const result = await pool.request().query("SELECT gi_proveedor.nombre_proveedor, gi_proveedor.email_proveedor, gi_medicion.nit_proveedor, COUNT(*) as conteo FROM gi_medicion  JOIN gi_proveedor ON gi_medicion.nit_proveedor = gi_proveedor.nit_proveedor  WHERE YEAR(fecha_inicio) = 2022  GROUP BY gi_proveedor.nombre_proveedor, gi_proveedor.email_proveedor, gi_medicion.nit_proveedor  ORDER BY conteo DESC ")
        res.json(result.recordset)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router