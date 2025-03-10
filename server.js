import express from "express";
import jsonServer from "json-server";
import path from "path";

const app = express();
const __dirname = path.resolve();

const apiServer = jsonServer.create();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();

apiServer.use(middlewares);
apiServer.use(router);

app.use("/api", apiServer);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
