const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: "chatModel",
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'userModel',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const model = mongoose.model("msgModel", msgSchema);
module.exports = model;