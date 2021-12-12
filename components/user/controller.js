const store = require("./store")

const addUser = function (username) {
    return new Promise(async (resolve, reject) => {
        if (!username)
            reject("Falta nombre de usuario");
        else {
            const myUser = {
                name: username,
            }
            console.log(myUser);
            resolve(store.addUser(myUser))
        }
    })
}

const getUsers = function () {
    return new Promise((resolve, reject) => resolve(store.getUsers())
    )
}


module.exports = {
    addUser,
    getUsers
}