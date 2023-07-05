const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./dbConnection");
const multer = require("multer")

const app = express();
const upload = multer({ dest: "uploads/" });

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
    const result = await pool.request().query("SELECT * FROM gi_proyecto")
    res.json(result.recordset)
  } catch (error) {
    console.error(error)
  }
})

app.post("/anadirProyecto", async function (req, res) {
  const {
    id_subarea,
    nombre_proyecto,
    abreviatura,
    fecha_inicio,
    periodicidad
  } = req.body;

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

app.post("/editarProyecto", async function (req, res) {
  const {
    id_proyecto,
    id_subarea,
    nombre_proyecto,
    abreviatura,
    periodicidad,
    tipoEstudio,
    conteoTotal
  } = req.body;
  console.log("TIPO", tipoEstudio)
  console.log("CONTEO", conteoTotal)
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

app.delete("/eliminarProyecto/:idProyecto", async function (req, res) {
  const idProyecto = req.params.idProyecto
  try {
    const result = await pool.request()
      .input("idProyecto", idProyecto)
      .query("DELETE FROM [dbo].[gi_proyecto] WHERE id_proyecto_historico = @idProyecto")
    console.log("DELETE WORKING")
  } catch (error) {
    console.error(error)
  }
})

app.get("/medicion", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM gi_medicion")
    res.json(result.recordset)
  } catch (error) {
    console.error(error)
  }
})

app.post("/anadirMedicion", async (req, res) => {
  const {
    id_proyecto,
    email_cliente,
    no_contrato,
    nit,
    presupuesto,
    muestra,
    fechaInicio,
    fechaFin
  } = req.body;
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

app.post("/editarMedicion", async (req, res) => {
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
  } = req.body;
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

app.delete("/eliminarMedicion/:idMedicion", async (req, res) => {
  const idMedicion = req.params.idMedicion;
  console.log(idMedicion)
  try {
    const result = await pool.request()
      .input("id_medicion", idMedicion)
      .query("DELETE FROM [dbo].[gi_medicion] WHERE id_medicion = @id_Medicion")
    console.log("DELETE MEDICION")
  } catch (error) {
    console.log(error)
  }
})

app.get("/cargoSolicitado", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT YEAR(fecha_inicio) AS año, nombre_puesto, COUNT(*) AS cantidad_proyectos FROM gi_medicion JOIN gi_cliente ON gi_medicion.email_cliente = gi_cliente.email_cliente GROUP BY YEAR(fecha_inicio),nombre_puesto HAVING COUNT(*) = (SELECT MAX(cantidad_proyectos) FROM(SELECT YEAR(fecha_inicio) AS año, nombre_puesto,COUNT(*) AS cantidad_proyectos FROM gi_medicion JOIN gi_cliente ON gi_medicion.email_cliente = gi_cliente.email_cliente GROUP BY YEAR(fecha_inicio),nombre_puesto) AS proyectos_por_cargo WHERE proyectos_por_cargo.año = YEAR(gi_medicion.fecha_inicio));")
    res.json(result.recordset)
    //console.log(result)
  } catch (error) {
    console.error(error)
  }
})


app.listen(5000, function (params) {
  console.log("Server is running on port 5000");
});
