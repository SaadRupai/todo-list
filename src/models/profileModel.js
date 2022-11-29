const { default: mongoose } = require("mongoose");
const monoose = require("mongoose");
const { stringify } = require("querystring");

const dataSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    mobile: {type: String},
    userName: {type: String, unique:true},
    password: {type: String}
},{versionKey:false});

const profileModel = mongoose.model("profiles", dataSchema);
module.exports=profileModel;