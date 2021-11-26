import express, { Application, Request, Response } from "express";
import routes from "./network/routes"

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routes(app);

app.get("/", (req: Request, res: Response) => {
  console.log(req.query); // Leyendo los query params de la petición
  console.log(req.headers); // Leyendo las cabeceras de la petición
  console.log(req.body); // Leyendo las cabeceras de la petición
  res.header({
    "custom-header": "valor custom",
  }); // Agregar valores a los headers
  res.send("root");
});

app.use("/app", express.static("public"));

try {
  app.listen(3000, () => {
    console.log("La aplicación está escuchando en http://localhost:3000");
  });
} catch (error) {
  console.error("Algo sucedió tratando de oír el puerto:" + error);
}
