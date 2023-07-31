const express = require("express");
const pool = require("../dbconnection")
const bodyParser = require("body-parser");

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/empresa", async function (req, res) {
    try {
        const result = await pool.request().query("SELECT * FROM gi_empresa");
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: "Ocurrio un error" });
    }
});

router.route("/anadirEmpresa").post(async (req, res) => {
    const {
        cod_empresa,
        nombre_empresa,
        cod_unidad,
        nombre_unidad,
        cod_area,
        nombre_area,
        id_subarea,
        nombre_subarea,
    } = req.body;

    try {
        const result = await pool
            .request()
            .input("cod_empresa", cod_empresa)
            .input("nombre_empresa", nombre_empresa)
            .input("cod_unidad", cod_unidad)
            .input("nombre_unidad", nombre_unidad)
            .input("cod_area", cod_area)
            .input("nombre_area", nombre_area)
            .input("id_subarea", id_subarea)
            .input("nombre_subarea", nombre_subarea)
            .query("INSERT INTO [dbo].[gi_empresa] ([cod_empresa] ,[nombre_empresa] ,[cod_unidad] ,[nombre_unidad] ,[cod_area] ,[nombre_area] ,[id_subarea] ,[nombre_subarea]) VALUES (@cod_empresa , @nombre_empresa , @cod_unidad , @nombre_unidad , @cod_area , @nombre_area , @id_subarea , @nombre_subarea)")
        console.log("INSERT WORKING", result);

    } catch (error) {
        console.log("NO FUNCIONO EL INSERT INTO: ", cod_area)
    }
})

router.route("/editarEmpresa").post(async (req, res) => {
    const {
        cod_empresa,
        nombre_empresa,
        cod_unidad,
        nombre_unidad,
        cod_area,
        nombre_area,
        id_subarea,
        nombre_subarea,
    } = req.body;


    try {
        const result = await pool
            .request()
            .input("cod_empresa", cod_empresa)
            .input("nombre_empresa", nombre_empresa)
            .input("cod_unidad", cod_unidad)
            .input("nombre_unidad", nombre_unidad)
            .input("cod_area", cod_area)
            .input("nombre_area", nombre_area)
            .input("id_subarea", id_subarea)
            .input("nombre_subarea", nombre_subarea)
            .query(
                "UPDATE [dbo].[gi_empresa] SET [cod_empresa] = @cod_empresa ,[nombre_empresa] = @nombre_empresa ,[cod_unidad] = @cod_unidad ,[nombre_unidad] = @nombre_unidad ,[cod_area] = @cod_area ,[nombre_area] = @nombre_area ,[nombre_subarea] = @nombre_subarea WHERE cod_empresa = @cod_empresa"
            );
        console.log("UPDATE WORKING", result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router