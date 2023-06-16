const express = require("express");
const cors = require("cors");
const pool = require("./dbConnection");

const app = express();

app.use(cors());

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

app.post("/anadirEmpresa", async (res, resp) => {});

app.listen(5000, function (params) {
  console.log("Server started");
});
