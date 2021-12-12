const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: "userModel"
    }]
});

const model = mongoose.model("chatModel", mySchema);
module.exports = model;