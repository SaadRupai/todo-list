const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    userName: {type: String},
    listTitle: {type: String},
    listDescription: {type: String},
    listStatus: {type: String},
    listCreateDate: {type: Date},
    listUpdateDate: {type: Date}
});

let listModel = mongoose.model("lists", dataSchema);

module.exports = listModel;