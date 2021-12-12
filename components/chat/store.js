const Model = require("./model")
const db = require("./db")
db("mongodb+srv://Jano:contrasenia@cluster0.mh8uj.mongodb.net/test");


const addChat = async function (users) {
    const myChat = new Model(users);
    return await myChat.save();
}

const getChats = async function () {
    return new Promise((resolve, reject) => {
        Model.find()
            .populate("users")
            .exec((err, data) => {
                if (err)
                    reject(err);

                resolve(data);
            })
    })
}

module.exports = {
    addChat,
    getChats
}