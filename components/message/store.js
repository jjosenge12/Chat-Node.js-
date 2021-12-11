const list=[]

const addMessage = function (message){
    list.push(message);
}

const getMessages= function(){
    return list;
}

module.exports = {
    addMessage,
    getMessages
}