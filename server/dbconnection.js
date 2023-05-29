const sql = require("mssql");

const config = {
  user: "node",
  password: "123456",
  server: "AlejandroOrtiz",
  database: "YaEncuestado",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
};

const pool = new sql.ConnectionPool(config);

pool.connect((err) => {
  if (err) {
    console.log("Error: ", err);
    return;
  }
  console.log("Connected");
});

module.exports = pool;
