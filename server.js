const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("root");
});

app.get("/message", (req, res) => {
    console.log(req.query);
  res.send("lista de mensajes");
});

app.post("/message", (req, res) => {
  console.log(req.body);
  res.send("creado nuevo mensaje");
});

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000");
