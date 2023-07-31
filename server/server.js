const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const empresaRoute = require("./routes/empresa");
const clienteRoute = require("./routes/cliente")

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Defining the routes
app.use("/auth", require("./routes/auth"));
app.use("/", empresaRoute);
app.use("/", clienteRoute)

app.listen(5000, function () {
  console.log("Server is running on port 5000");
});
