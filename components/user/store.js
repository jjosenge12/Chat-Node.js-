const Model = require("./model")
const db= require("./db")
db("mongodb+srv://Jano:contrasenia@cluster0.mh8uj.mongodb.net/test");


const addUser = async function (username) {
    const myUser = new Model(username);
    return await myUser.save();
}

const getUsers = async function () {
    const users = await Model.find();
    return users;
}

module.exports = {
    addUser,
    getUsers
}