import express from "express";
import jsonServer from "json-server";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";
import { spawn } from "child_process";

const app = express();
const __dirname = path.resolve();

const jsonServerProcess = spawn("npx", ["json-server", "--watch", "db/db.json", "--port", "4000"], {
  stdio: "inherit",
  shell: true,
});

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true
  })
);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

process.on("exit", () => jsonServerProcess.kill());
