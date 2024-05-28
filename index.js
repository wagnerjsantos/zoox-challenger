const express = require("express")
const app = express()
const port = 3000
const routes = require("./src/routes/index")
const ConnectDatabase = require("./src/config/database")
const ConnectionOptions = require("./src/config/typeorm")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

ConnectDatabase(ConnectionOptions)

app.use("/", routes)

app.listen(port, () => {
    console.log("rodando porta 3000")
})