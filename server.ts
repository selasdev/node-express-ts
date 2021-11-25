const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_: any, res: any) => {
  res.send("root");
});

app.get("/message", (req: any, res: any) => {
  console.log(req.query);
  console.log(req.headers);
  res.header({
      "custom-header": "valor custom"
  })
  res.send("lista de mensajes!");
});

app.post("/message", (req:any, res: any) => {
  console.log(req.body);
  res.send("creado nuevo mensaje");
});

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000");
