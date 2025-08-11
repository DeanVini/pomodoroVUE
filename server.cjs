const express = require("express");
const jsonServer = require("json-server");
const path = require("path");

const app = express();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();

app.use(express.static(path.join(__dirname, "dist")));

app.use("/api", middlewares, router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

module.exports = app;

