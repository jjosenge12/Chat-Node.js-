const store= require("./store")

const getMessages = function(){
    return new Promise ((resolve,reject)=>{
        return resolve(store.getMessages());
    })
}

const addMessage = function (user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            return reject("Falta nombre de usuario o mensaje");
        } else {
            const fullMessage = {
                user: user,
                message: message,
                date: new Date()
            }

            console.log(fullMessage);
            store.addMessage(fullMessage);
            return resolve(fullMessage);
        }
    })

}

module.exports = {
    addMessage,
    getMessages
}