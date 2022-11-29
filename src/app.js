const express = require("express");
const router = require("./routes/api");

const app = new express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");


//middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));


//mongoose conn
let URI = "mongodb://127.0.0.1:27017/user";
let options = {user:"", pass:"", autoIndex: true};
mongoose.connect(URI, options, (err)=>{
    console.log("DB connected");
    if(err){
        console.log("DB conn failed");
    }
});


//route
app.use("/api/v1",router);

//undefined route
app.use("*", (req,res)=>{
    res.status(404).json({status:"Fail", data:"not found"});
});

module.exports=app;