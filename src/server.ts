// E X P R E S S   S E R V E R //

import express from "express"
const app = express()
app.use(express.json())

const PORT: number = 8080

app.listen(PORT, () => {
    console.log(`Server running at 127.0.0.1:${PORT}!`)
})

app.get("/", (req, res) => {
    res.status(400).send({
        responseCode: 200,
        message: "Successful",
        success: "true"
    })
})