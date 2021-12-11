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
            return resolve(fullMessage);
        }
    })

}

module.exports = {
    addMessage,
}