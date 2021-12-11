const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    user: {
        type: String,
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

const model=mongoose.model("msgModel",msgSchema);
module.exports = model;