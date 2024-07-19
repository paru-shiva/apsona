import express from "express";
import mysql from "mysql2/promise";
const app = express();

// Create the connection to database

app.get("/", (req, res) => {
  res.send("hello worlddd");
});

app.listen(3000, () => {
  console.log("server started.");
});
