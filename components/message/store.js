const db = require("mongoose");
const Model = require("./model")

db.Promise = global.Promise;
db.connect("mongodb+srv://Jano:contrasenia@cluster0.mh8uj.mongodb.net/test", {
    useNewUrlParser: true,
})
    .then(() => console.log("db conectada con exito"))
    .catch((err) => console.error("Error en conexion db"));

const addMessage = async function (message) {
    const myMessage = new Model(message);
    return await myMessage.save();
}

const getMessages = async function () {
    const messages = await Model.find();
    return messages;
}

const updateMessage = async function(id,newMessage){
    const oldMessage=await Model.findOne({
        _id:id
    });

    oldMessage.message= newMessage;
    return await addMessage(oldMessage);

}

module.exports = {
    addMessage,
    getMessages,
    updateMessage
}