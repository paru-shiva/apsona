import express, { json } from "express";
const app = express();
const portSelected = process.env.PORT || 4000;

import mysql from "mysql2/promise";

// Create the connection to database
const connection = await mysql.createConnection({
  host: "bujtuwkrt3getswhsi8t-mysql.services.clever-cloud.com",
  user: "uy5bvzwclj463gnm",
  database: "bujtuwkrt3getswhsi8t",
  password: "FPKKauQCTP3mwKY6hFvL",
});

// A simple SELECT query

let displayOp;

try {
  const [results] = await connection.query("show tables");
  console.log(results);
  displayOp = JSON.stringify(results);
} catch (err) {
  console.log(err);
}

app.get("/", (req, res) => {
  res.send(`${displayOp}`);
});

app.listen(portSelected, () => {
  console.log(`Example app listening on port ${portSelected}`);
});
