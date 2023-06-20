const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./dbConnection");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.end("home");
});

app.get("/area", async function (req, res) {
  try {
    const result = await pool.request().query("SELECT * FROM gi_empresa");
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Ocurrio un error" });
  }
});

app.post("/anadirEmpresa", async (req, res) => {
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

app.post("/editarEmpresa", async (req, res) => {
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
        "UPDATE [dbo].[gi_empresa] SET [cod_empresa] = @cod_empresa ,[nombre_empresa] = @nombre_empresa ,[cod_unidad] = @cod_unidad ,[nombre_unidad] = @nombre_unidad ,[cod_area] = @cod_area ,[nombre_area] = @nombre_area ,[id_subarea] = @id_subarea ,[nombre_subarea] = @nombre_subarea WHERE cod_empresa = @cod_empresa"
      );
    console.log("UPDATE WORKING", result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, function (params) {
  console.log("Server started");
});
