//Maneja las conexiones del componente user

const express = require("express");
const controller = require("./controller");
const router = express.Router();
const response = require("../../network/response")

router.post("/", (req, res) => {
    controller.addChat(req.body.users)
        .then((data) => response.success(req, res, data, 201))
        .catch((err) => response.error(req, res, err, 500, "Es solo una simulacion"))
})

router.get("/", (req, res) => {
    controller.getChats()
        .then((chats) => response.success(req, res, chats, 200))
        .catch((err) => response.error(req, res, err, 500))
});

module.exports = router;