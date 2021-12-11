const express = require("express");
const bodyParser = require("body-parser");

const router = require("./network/routes"); //importo el archivo routes.js encargado de manejar las rutas en la capa de red

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app); //paso la app a la funcion router para que le agregue todas las rutas



app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");