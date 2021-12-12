const store = require("./store")

const addUser = function (username) {
    return new Promise(async (resolve, reject) => {
        if (!username) {
            return reject("Falta nombre de usuario");
        } else {
            const myUser = {
                username: username,
            }
            console.log(myUser);
            const newUser = await store.addUser(myUser);
            return resolve(newUser);
        }
    })
}

const getUsers = function () {
    return new Promise((resolve, reject) => {
        return resolve(store.getUsers());
    })
}


module.exports = {
    addUser,
    getUsers
}