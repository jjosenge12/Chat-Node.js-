//Maneja las conexiones del componente message, no maneja logica, eso se agregara posteriormente en controller.js

const express = require("express");
const controller = require("./controller");
const router = express.Router();
const response = require("../../network/response")

router.get("/", (req, res) => {
    controller.getMessages()
        .then((listMessages) => response.success(req, res, listMessages, 200))
        .catch((err) => response.error(req, res, err, 500))
});

router.post("/", (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => response.success(req, res, fullMessage, 201))
        .catch((err) => response.error(req, res, err, 500, "Es solo una simulacion"))
})

router.patch("/:id", (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then((message) => response.success(req, res, message, 200))
        .catch((err) => response.error(req, res, "Error inesperado", 500, err));
})

module.exports = router;