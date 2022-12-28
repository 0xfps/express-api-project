// E X P R E S S   S E R V E R //

import express from "express"
import { Db, MongoClient } from "mongodb"

const app = express()
app.use(express.json())

const PORT: number = 8080
const URL: string = "mongodb://127.0.0.1:27017/"

const client: MongoClient = new MongoClient(URL)

app.listen(PORT, "", 10, () => {
    console.log(`Server running at 127.0.0.1:${PORT}!`)

    client.connect((err, db) => {
        if (err) throw err
        console.log(`Connected @ ${URL}!`)

        const database = db?.db("ourregister")
        database?.createCollection("users", (err, db) => {
            if (err) {
                console.log("Collection users, exists!")
            } else {
                console.log("Collection users, created")
            }
        })
        
        client.close()
    })
})

app.get("/", (req, res) => {
    res.status(400).send({
        responseCode: 200,
        message: "Successful",
        success: "true"
    })
})