const express = require("express")
const router = express.Router()
const csvConhtroller = require("../modules/csv/controllers/CsvController")
const multer = require("multer")
const upload = multer({dest: 'tmp/csv/'})

router.post("/", upload.single('file'), csvConhtroller.uploadCsv)

module.exports = router