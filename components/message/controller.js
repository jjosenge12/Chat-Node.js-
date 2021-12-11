const store = require("./store")

const getMessages = function () {
    return new Promise((resolve, reject) => {
        return resolve(store.getMessages());
    })
}

const addMessage = function (user, message) {
    return new Promise(async (resolve, reject) => {
        if (!user || !message) {
            return reject("Falta nombre de usuario o mensaje");
        } else {
            const fullMessage = {
                user: user,
                message: message,
                date: new Date()
            }

            console.log(fullMessage);
            const newMessage=await store.addMessage(fullMessage);
            return resolve(newMessage);
        }
    })
}

const updateMessage= function (id,message){
    return new Promise(async (resolve, reject)=>{
        if(!id || !message){
            return reject("Falta id o mensaje en updateMessages");
        }

        const newMessage=await store.updateMessage(id,message);
        return resolve(newMessage);
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage
}