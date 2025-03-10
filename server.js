const express = require("express");
const jsonServer = require("json-server");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const app = express();
const apiServer = jsonServer.create();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();

app.use(express.static("dist")); // Serve o frontend

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
  })
);

apiServer.use(middlewares);
apiServer.use(router);
apiServer.listen(3001, () => {
  console.log("JSON Server rodando na porta 3001");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
