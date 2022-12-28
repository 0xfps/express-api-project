import { MongoClient } from "mongodb"
const URL: string = "mongodb://127.0.0.1:27017/"

const client = new MongoClient(URL)

client.connect((err, db) => {
    if (err) throw err
    console.log("Connected!")
    client.close()
})