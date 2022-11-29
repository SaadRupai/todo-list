const listModel = require("../models/listModel");

exports.createList = (req, res) => {
    let userName = req.headers["userName"];
    let listTitle = req.body["listTitle"];
    let listDescription = req.body["listDescription"];
    let listStatus = "new";
    let listCreateDate = Date.now();
    let listUpdateDate = Date.now();
    let postBody = {
        userName: userName,
        listTitle: listTitle,
        listDescription: listDescription,
        listStatus: listStatus,
        listCreateDate: listCreateDate,
        listUpdateDate: listUpdateDate
    }

    listModel.create(postBody, (err, data) => {
        try {
            res.status(200).json({ status: "Success", data: data });
        }
        catch (err) {
            res.status(400).json({ status: "Failed", data: err });
        }
    });
}

exports.selectList = (req, res) => {
    let userName = req.headers["userName"];

    listModel.find({ userName: userName }, (err, data) => {
        try {
            res.status(200).json({ status: "Success", data: data });
        }
        catch (err) {
            res.status(400).json({ status: "Failed", data: err });
        }
    });
}

exports.updateList = (req, res) => {
    let listTitle = req.body["listTitle"];
    let listDescription = req.body["listDescription"];
    let _id = req.body["_id"];
    let listUpdateDate = Date.now();

    let postBody = {
        listTitle: listTitle,
        listDescription: listDescription,
        listUpdateDate: listUpdateDate
    }

    listModel.updateOne({ _id: _id }, { $set: postBody }, { upsert: true }, (err, data) => {
        try {
            res.status(200).json({ status: "Success", data: data });
        }
        catch (err) {
            res.status(400).json({ status: "Failed", data: err });
        }
    });
}

exports.updateListStatus = (req, res) => {
    let listStatus = req.body["listStatus"];
    let _id = req.body["_id"];
    let listUpdateDate = Date.now();

    let postBody = {
        listStatus: listStatus,
        listUpdateDate: listUpdateDate
    }

    listModel.updateOne({ _id: _id }, { $set: postBody }, { upsert: true }, (err, data) => {
        try {
            res.status(200).json({ status: "Success", data: data });
        }
        catch (err) {
            res.status(400).json({ status: "Failed", data: err });
        }
    });
}

exports.removeList = (req, res) => {
    let _id = req.body["_id"];

    listModel.remove({ _id: _id }, (err, data) => {
        try {
            res.status(200).json({ status: "Success", data: data });
        }
        catch (err) {
            res.status(400).json({ status: "Failed", data: err });
        }
    });
}

exports.listStatusSearch = (req, res) => {
    let userName = req.headers["userName"];
    let listStatus = req.body["listStatus"];

    listModel.find({ userName: userName, listStatus: listStatus }, (err, data) => {
        try {
            res.status(200).json({ status: "Success", data: data });
        }
        catch (err) {
            res.status(400).json({ status: "Failed", data: err });
        }
    });
}

exports.listDateSearch = (req, res) => {
    let userName = req.headers["userName"];
    let fromDate = req.body["fromDate"];
    let toDate = req.body["toDate"];
    // let query = {
    //     userName: userName,
    //     listCreateDate: { $gte: ISODate(fromDate), $lt: ISODate(toDate) }
    // }

    listModel.find({ userName: userName, listCreateDate: { $gte: new Date(fromDate), $lte: new Date(toDate) } }, (err, data) => {
        try {
            res.status(200).json({ status: "Success", data: data });
        }
        catch (err) {
            res.status(400).json({ status: "Failed", data: err });
        }
    });
}

