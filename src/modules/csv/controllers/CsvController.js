const CsvService = require("../service/CsvService")
const Csv = require("fast-csv")
const fs = require("fs")

class CsvController {

    static async uploadCsv(req, res) {

        var fileRows = []

        fs.createReadStream(req.file.path)
            .pipe(Csv.parse({ headers: true }))
                .on('data', function (data) {
                fileRows.push(data);
            })
            .on('end', function () {
                console.log('File Rows:', fileRows);
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.error('Error deleting temp file:', err);
                    }
                    res.send(fileRows);
                });
            })
            .on('error', function (error) {
                console.error('Error processing CSV file:', error);
            });

        await CsvService.uploadCsv(fileRows)

        return fileRows
    }

}

module.exports = CsvController