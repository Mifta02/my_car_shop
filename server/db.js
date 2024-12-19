const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: " MY_carshop",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database.");
});

module.exports = db;
