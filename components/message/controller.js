const store = require("./store")

const getMessages = function (filterMessages) {
    return new Promise((resolve, reject) => resolve(store.getMessages(filterMessages)))
}

const addMessage = function (chat,user, message) {
    return new Promise(async (resolve, reject) => {
        if (!chat || !user || !message)
            reject("Faltan datos");
        else {
            const fullMessage = {
                chat: chat,
                user: user,
                message: message,
                date: new Date()
            }

            console.log(fullMessage);
            const newMessage = await store.addMessage(fullMessage);
            resolve(newMessage);
        }
    })
}

const updateMessage = function (id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message)
            reject("Falta id o mensaje en updateMessages");

        resolve(store.updateMessage(id, message))
    })
}

const deleteMessage = function (id) {
    return new Promise(async (resolve, reject) => {
        if (!id)
            reject("No hay id");
        resolve(store.deleteMessage(id));
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}