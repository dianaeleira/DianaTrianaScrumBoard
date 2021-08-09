const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectID, ref: "user" },
    name: String,
    description: String,
    taskStatus: String,
    imageUrl: String,
    date: { type: Date, default: Date.now }
});
const board = mongoose.model("board", boardSchema);
module.exports.board;