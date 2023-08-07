const mysql = require("mysql2");
require('dotenv').config();
var pool = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
})

pool.connect(function(error){
  if(error) throw error;
  console.log("connected to DB!");
})

module.exports = pool
