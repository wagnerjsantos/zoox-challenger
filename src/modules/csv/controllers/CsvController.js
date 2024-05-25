const CsvService = require("../service/CsvService")

class CsvController {

    static async uploadCsv(req, res) {
        CsvService.uploadCsv();
    }

}

module.exports = CsvController