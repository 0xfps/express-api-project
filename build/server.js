"use strict";
// E X P R E S S   S E R V E R //
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running at 127.0.0.1:${PORT}!`);
});
app.get("/", (req, res) => {
    res.status(400).send({
        responseCode: 200,
        message: "Successful",
        success: "true"
    });
});
