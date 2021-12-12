const store = require("./store")

const addChat = function (users) {
    return new Promise(async (resolve, reject) => {
        if (!users || !Array.isArray(users))
            reject("Falta array de usuarios");
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