
const Model = require("./model")
const db = require("./db")
db("mongodb+srv://Jano:contrasenia@cluster0.mh8uj.mongodb.net/test");


const addMessage = async function (message) {
    const myMessage = new Model(message);
    return await myMessage.save();
}

const getMessages = async function (filterMessage) {
    return new Promise((resolve, reject) => {
        let filter = {}

        if (filterMessage.chat != null)
            filter.chat = filterMessage.chat

        if (filterMessage.user != null)
            filter.user = filterMessage.user

        Model.find(filter)
            .populate('user')
            .exec((error, data) => {
                if (error)
                    reject(error)
                else {
                    resolve(data)
                }
            })
    })
}

const updateMessage = async function (id, newMessage) {
    const oldMessage = await Model.findOne({
        _id: id
    });

    oldMessage.message = newMessage;
    return await addMessage(oldMessage);

}

const deleteMessage = async function (id) {
    return await Model.deleteOne(
        { _id: id }
    );

}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}