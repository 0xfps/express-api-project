"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const URL = "mongodb://127.0.0.1:27017/";
const client = new mongodb_1.MongoClient(URL);
client.connect((err, db) => {
    if (err)
        throw err;
    console.log("Connected!");
    client.close();
});
