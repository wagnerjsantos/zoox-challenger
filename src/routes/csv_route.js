const express = require("express")
const router = express.Router()
const csvConhtroller = require("../modules/csv/controllers/CsvController")
const multer = require("multer")
const upload = multer({dest: 'tmp/csv/'})

router.get("/:id", csvConhtroller.getOne)
router.get("/", csvConhtroller.getAll)
router.put("/:id", csvConhtroller.update)
router.post("/", upload.single('file'), csvConhtroller.uploadCsv)
router.delete("/:id", csvConhtroller.delete)

module.exports = router