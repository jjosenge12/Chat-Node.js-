//Maneja las conexiones del componente message, no maneja logica, eso se agregara posteriormente en controller.js

const express = require("express");

const router = express.Router();
const response= require("../../network/response")

router.get("/", function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Valor personalizado"
    });
    response.success(req, res, "lista de mensajes");
});

router.post("/", function (req, res) {
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, "Error inesperado", 500, "Es solo una simulacion");
    } else {
        response.success(req, res, "Creado correctamente", 201);
    }
})

module.exports = router;