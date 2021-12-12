const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    username: {
        type: String,
        required: true
    }
});

const model = mongoose.model("userModel", mySchema);
module.exports = model;