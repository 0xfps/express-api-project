// A P I   C A L L E R   R E Q U E S T //
import request from "request";

const urlString: string = "http://127.0.0.1"
const PORT: string = ":8080"
const URL: string = `${urlString}${PORT}`
const GET: string = "GET"
const POST: string = "POST"
const headers: object = {
    "Accepts": "Application/json"
}
const PROXY: string = ""

request({
    "url": URL,
    "method": GET,
    "headers": headers,
    "proxy": PROXY,
}, (error, response, body) => {
    console.log(body)
    console.log(JSON.parse(body))
    console.log(JSON.parse(body).message)
})