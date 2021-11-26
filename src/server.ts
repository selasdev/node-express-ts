import express, { Application, Request, Response } from "express";

const response = require("./network/response");
const queryUtils = require("./util/query");

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  console.log(req.query); // Leyendo los query params de la petición
  console.log(req.headers); // Leyendo las cabeceras de la petición
  console.log(req.body); // Leyendo las cabeceras de la petición
  res.header({
    "custom-header": "valor custom",
  }); // Agregar valores a los headers
  res.send("root");
});

app.get("/message", (req: Request, res: Response) => {
  if (!queryUtils.checkIfHasError(req)) {
    response.success(req, res, 200, "Lista de Mensajes");
  } else {
    response.error(req, res, 500, "No se pudo obtener la lista de mensajes");
  }
});

app.post("/message", (req: Request, res: Response) => {
  if (!queryUtils.checkIfHasError(req)) {
    response.success(req, res, 201, "El mensaje se ha creado");
  } else {
    response.error(req, res, 500, "No se pudo crear el mensaje");
  }
});

app.delete("/message", (req: Request, res: Response) => {
  if (!queryUtils.checkIfHasError(req)) {
    response.success(req, res, 200, "Mensaje borrado con éxito");
  } else {
    response.error(req, res, 500, "No se pudo borrar el mensajes");
  }
});

app.use("/app", express.static("public"));

try {
  app.listen(3000, () => {
    console.log("La aplicación está escuchando en http://localhost:3000");
  });
} catch (error) {
  console.error("Algo sucedió tratando de oír el puerto:" + error);
}
