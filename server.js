import express from "express";
import { spawn } from "child_process";
import path from "path";

const app = express();
const __dirname = path.resolve();

const jsonServerProcess = spawn("npx", ["json-server", "--watch", "db/db.json", "--port", "4000"], {
  stdio: "inherit",
  shell: true,
});

app.use("/api", async (req, res) => {
  const proxy = await fetch(`http://localhost:4000${req.url}`);
  const data = await proxy.text();
  res.send(data);
});

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

process.on("exit", () => jsonServerProcess.kill());
