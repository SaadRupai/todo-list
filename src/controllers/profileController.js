// reg+profile update+delete
let jwt = require('jsonwebtoken');
const profileModel = require("../models/profileModel");

exports.createProfile = (req, res) => {
    const reqBody = req.body;
    profileModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Failed", data: err });
        }
        else {
            res.status(200).json({ status: "Success", data: data });
        }
    });
}

exports.loginProfile = (req, res) => {
    const userName = req.body["userName"];
    const password = req.body["password"];
    profileModel.find({ userName: userName, password: password }, { password: 0 }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Failed", data: err });
        }
        else {
            if (data.length > 0) {

                //auth token
                let payload = {
                    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                    data: data[0]
                }
                let token = jwt.sign(payload, 'secretKey12345');
                // req.headers.token = token;

                res.status(200).json({ status: "Success", token: token, data: data });
            }
            else {
                res.status(401).json({ status: "unauhorized" });
            }
        }
    });
}

exports.selectProfile = (req, res) => {

    let userName = req.headers["userName"];

    profileModel.find({ userName: userName }, { password: 0 }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Failed", data: err });
        }
        else {
            res.status(200).json({ status: "Success", data: data });
        }
    });
}

exports.updateProfile=(req,res)=>{
    let userName = req.headers["userName"];
    let reqBody = req.body;

    profileModel.updateOne({userName: userName}, {$set: reqBody}, {upsert: true}, (err, data)=>{
        if(err){
            res.status(400).json({ status: "Failed", data: err });
        }
        else{
            res.status(200).json({ status: "Success", data: data });
        }
    });
}







