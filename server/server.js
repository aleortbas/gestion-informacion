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

app.get("/cliente", async function (req, res) {
  try {
    const result = await pool.request().query("SELECT * FROM gi_cliente");
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Ocurrio un error" });
  }
});

app.post("/anadiCliente", async function (req, res) {

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

app.delete("/eliminarCliente/:email", async function (req, res) {
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

app.get("/proveedor", async function (req, res) {
  try {
    const result = await pool.request().query("SELECT * FROM gi_proveedor")
    res.json(result.recordset)
  } catch (error) {
    console.error(error)
  }
})

app.post("/anadirProveedor", async function (req, res) {

  const {
    nit,
    nombre_proveedor,
    email_proveedor,
    telefono_proveedor
  } = req.body;

  const abreviatura = "abreviatura"

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
    console.error(error)
  }
})

app.post("/editarProveedor", async function (req, res) {
  const {
    nit,
    nombre_proveedor,
    email_proveedor,
    telefono_proveedor
  } = req.body;

  const abreviatura = "abreviatura"

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
    console.error(error)
  }
})

app.delete("/eliminarProveedor/:email", async function (req, res) {
  const email_proveedor = req.params.email;
  try {
    let res = await pool
      .request()
      .input("email", email_proveedor)
      .query("DELETE FROM [dbo].[gi_proveedor] WHERE email_proveedor = @email")
    console.log("DELTE WORKING")
  } catch (error) {
    console.log(error)
  }
})

app.get("/proyecto", async function (req, res) {
  try {
    const result = await pool.request().query("SELECT * FROM gi_proyecto_historico")
    res.json(result.recordset)
  } catch (error) {
    console.error(error)
  }
})

app.post("/anadirProyecto", async function (req, res) {
  const [
    idProyecto,
    nombreProyecto,
    abreviatura,
    tipoEstudio,
    conteoTotal,
    conteoIdeal,
    periodicdad,
    idSubarea
  ] = req.body

  try {
    let res = await pool.request()
      .input("idProyecto", idProyecto)
      .input("nombreProyecto", nombreProyecto)
      .input("abreviatura", abreviatura)
      .input("tipoEstudio", tipoEstudio)
      .input("conteoTotal", conteoTotal)
      .input("conteoIdeal", conteoIdeal)
      .input("periodicdad", periodicdad)
      .input("idSubarea", idSubarea)
      .query("INSERT INTO [dbo].[gi_proyecto_historico]([nombre_proyecto],[abreviatura_proyecto],[tipo_estudio],[fecha_inicio_proyecto],[conteo_total_mediciones],[conteo_ideal_mediciones],[periodicidad],[id_subarea])VALUES(@nombreProyecto, @abreviatura, @tipoEstudio, @fechaInicio, @conteoTotal, @conteoIdeal, @periodicdad, @idSubarea)")
    console.log("INSERT WORKING")
  } catch (error) {
    console.error(error)
  }
})

app.listen(5000, function (params) {
  console.log("Server started");
});
