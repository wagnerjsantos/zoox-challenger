const express = require("express")
const router = express.Router()
const csv_route = require("./csv_route")

router.use("/csv", csv_route)

module.exports = router