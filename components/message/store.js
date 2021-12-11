const db = require("mongoose");
const Model = require("./model")

db.Promise = global.Promise;
db.connect("mongodb+srv://Jano:contrasenia@cluster0.mh8uj.mongodb.net/test", {
    useNewUrlParser: true,
}).then(() => console.log("db conectada con exito"));

const addMessage = function (message) {
    const myMessage = new Model(message);
    myMessage.save();
}

const getMessages = async function () {
    const messages = await Model.find();
    return messages;
}

module.exports = {
    addMessage,
    getMessages
}