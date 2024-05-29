const express = require("express")
const app = express()
const port = 8000
const routes = require("./src/routes/index")
const ConnectDatabase = require("./src/config/database")
const ConnectionOptions = require("./src/config/typeorm")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())

app.use(cors())

ConnectDatabase(ConnectionOptions)

app.use("/", routes)

app.listen(port, () => {
    console.log("rodando porta 8000")
})