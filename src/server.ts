import express, { Application } from "express";
import { initDB } from "./db";
import routes from "./network/routes";
const { connect } = require("./socket");
require("dotenv").config();

const app: Application = express();
const server = require("http").Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connect(server);
routes(app);
app.use("/app", express.static("public"));

initDB(process.env.DBURL as string)
  .then(() => {
    console.log("[db]: Conectado a la base de datos");
    server.listen(3000, () => {
      console.log("La aplicación está escuchando en http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("[db]: error connectando a la base de datos", err);
  });
