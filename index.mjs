import express from "express";
const app = express();
const portSelected = process.env.PORT || 4000;

import mysql from "mysql2/promise";

// Create the connection to database
const connection = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
});

// A simple SELECT query

try {
  const [results] = await connection.query("SHOW DATABASES");
  console.log(results);
} catch (err) {
  console.log(err);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(portSelected, () => {
  console.log(`Example app listening on port ${portSelected}`);
});
