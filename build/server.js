"use strict";
// E X P R E S S   S E R V E R //
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8080;
const URL = "mongodb://127.0.0.1:27017/";
const client = new mongodb_1.MongoClient(URL);
app.listen(PORT, "", 10, () => {
    console.log(`Server running at 127.0.0.1:${PORT}!`);
    client.connect((err, db) => {
        if (err)
            throw err;
        console.log(`Connected @ ${URL}!`);
        const database = db === null || db === void 0 ? void 0 : db.db("ourregister");
        database === null || database === void 0 ? void 0 : database.createCollection("users", (err, db) => {
            if (err) {
                console.log("Collection users, exists!");
            }
            else {
                console.log("Collection users, created");
            }
        });
        client.close();
    });
});
app.get("/", (req, res) => {
    res.status(400).send({
        responseCode: 200,
        message: "Successful",
        success: "true"
    });
});
