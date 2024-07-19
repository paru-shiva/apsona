import express from "express";
import mysql from "mysql2/promise";
const app = express();

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

let database_info;

// A simple SELECT query
try {
  const [results] = await connection.query("SHOW DATABASES");
  database_info = results[0].Database;
  console.log(database_info);
} catch (err) {
  console.log(err);
}

app.get("/", (req, res) => {
  res.send(`${database_info}`);
});

app.listen(3000, () => {
  console.log("server started.");
});
