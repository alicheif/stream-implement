const express = require('express');
const dotenv = require('dotenv');
const pool = require("../src/utils/db_connection")
const api = require("./controllers")

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
pool;
app.use(
  '/api', 
  api
)


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

