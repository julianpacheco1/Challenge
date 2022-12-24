const express = require("express");
const app = express();
const productos = require("./pruductsbank")
const cors = require("cors");
// parsing middleware
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
app.use(express.json());

app.get("/productos", (req, res) => {
  const resultado = productos.list()
  res.send(resultado)
})

app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));

