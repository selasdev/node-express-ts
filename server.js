const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("root");
});

app.get("/message", (req, res) => {
  res.send("lista de mensajes");
});

app.post("/message", (req, res) => {
  res.send("creado nuevo mensaje");
});

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000");
