//Maneja las conexiones del componente user

const express = require("express");
const controller = require("./controller");
const router = express.Router();
const response = require("../../network/response")

router.post("/", (req, res) => {
    controller.addUser(req.body.name)
        .then((data) => response.success(req, res, data, 201))
        .catch((err) => response.error(req, res, err, 500, "Es solo una simulacion"))
})

router.get("/", (req, res) => {
    controller.getUsers()
        .then((users) => response.success(req, res, users, 200))
        .catch((err) => response.error(req, res, err, 500))
});

module.exports = router;