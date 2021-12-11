//Maneja las conexiones del componente message, no maneja logica, eso se agregara posteriormente en controller.js

const express = require("express");
const controller = require("./controller");
const router = express.Router();
const response = require("../../network/response")

router.get("/", function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Valor personalizado"
    });
    response.success(req, res, "lista de mensajes");
});

router.post("/", function (req, res) {

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => response.success(req, res, fullMessage, 201))
        .catch((err) => response.error(req, res, err, 500, "Es solo una simulacion"))
})

module.exports = router;