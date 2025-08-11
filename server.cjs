const express = require("express");
const jsonServer = require("json-server");
const path = require("path");

const app = express();
const dbFile = path.join(__dirname, "db", "db.json");
const router = jsonServer.router(dbFile);
const middlewares = jsonServer.defaults();

app.use(express.static(path.join(__dirname, "dist")));

app.use("/api", middlewares, router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

module.exports = app;
