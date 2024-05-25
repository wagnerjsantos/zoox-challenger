const express = require("express")
const router = express.Router()
const csvConhtroller = require("../modules/csv/controllers/CsvController")

router.get("/", csvConhtroller.uploadCsv)

module.exports = router