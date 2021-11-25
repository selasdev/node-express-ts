import express, { Application, Request, Response } from "express";
import { BaseResponse } from "./types/responses";

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  console.log(req.query); // Leyendo los query params de la petición
  console.log(req.headers); // Leyendo las cabeceras de la petición
  console.log(req.body); // Leyendo las cabeceras de la petición
  res.send("root");
});

app.get("/message", (_: Request, res: Response) => {
  res.header({
    "custom-header": "valor custom",
  });
  const responseToClient: BaseResponse = {
    error: null,
    body: "lista de mensajes",
  };
  res.status(200).send(responseToClient);
});

app.post("/message", (_: Request, res: Response) => {
  const responseToClient: BaseResponse = {
    error: null,
    body: "creado correctamente",
  };
  res.status(201).send(responseToClient);
});

app.delete("/message", (_: Request, res: Response) => {
  const responseToClient: BaseResponse = {
    error: null,
    body: "Eliminado correctamente",
  };
  res.status(200).send(responseToClient);
});

try {
  app.listen(3000, () => {
    console.log("La aplicación está escuchando en http://localhost:3000");
  });
} catch (error) {
  console.error("Algo sucedió tratando de oír el puerto:" + error);
}
