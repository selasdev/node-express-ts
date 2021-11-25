import express, { Application, Request, Response } from "express";

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_: Request, res: Response) => {
  res.send("root");
});

app.get("/message", (req: Request, res: Response) => {
  console.log(req.query);
  console.log(req.headers);
  res.header({
    "custom-header": "valor custom",
  });
  res.send("lista de mensajes!");
});

app.post("/message", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("creado nuevo mensaje");
});

try {
  app.listen(3000, () => {
    console.log("La aplicación está escuchando en http://localhost:3000");
  });
} catch (error) {
  console.error("Algo sucedió tratando de oír el puerto:" + error);
}
