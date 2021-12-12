const store = require("./store")

const addChat = function (users) {
    return new Promise(async (resolve, reject) => {
        if (!users)
            reject("Faltan usuarios");
        else {
            const myChat = {
                users: users,
            }
            console.log(myChat);
            resolve(store.addChat(myChat))
        }
    })
}

const getChats = function () {
    return new Promise((resolve, reject) => resolve(store.getChats())
    )
}


module.exports = {
    addChat,
    getChats
}