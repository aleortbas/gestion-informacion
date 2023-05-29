const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.end("home");
});

app.listen(5000, function (params) {
  console.log("Server started");
});
