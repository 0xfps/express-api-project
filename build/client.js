"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// A P I   C A L L E R   R E Q U E S T //
const request_1 = __importDefault(require("request"));
const urlString = "http://127.0.0.1";
const PORT = ":8080";
const URL = `${urlString}${PORT}`;
const GET = "GET";
const POST = "POST";
const headers = {
    "Accepts": "Application/json"
};
const PROXY = "";
(0, request_1.default)({
    "url": URL,
    "method": GET,
    "headers": headers,
    "proxy": PROXY,
}, (error, response, body) => {
    console.log(body);
    console.log(JSON.parse(body));
    console.log(JSON.parse(body).message);
});
