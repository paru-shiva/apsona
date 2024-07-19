import express from "express";
const app = express();

import mysql from "mysql2/promise";

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
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
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("server started.");
});
