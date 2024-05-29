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
			.on('end', async () => {
				fs.unlink(req.file.path, async (err) => {
					if (err) {
						console.error('Error deleting temp file:', err);
					}
					const userSaved = await CsvService.uploadCsv(fileRows)
					res.send(userSaved);
				});
			})
			.on('error', function (error) {
				console.error('Error processing CSV file:', error);
			});
		return false
	}

	static async getOne(req, res) {

		const user = await CsvService.getOne(req.params.id)

		if (!user){
			res.status(404).json({
				message: "user not found"
			});
		}

		res.send(user);
	}

	static async getAll(req, res) {
		const users = await CsvService.getAll()
		res.send(users);
	}

	static async getLogs(req, res) {
		const logs = await CsvService.getLogs()
		res.send(logs);
	}

	static async update(req, res) {

		const user = await CsvService.update(req.params.id, req.body)
		res.send(user);

		return false
	}

	static async delete(req, res) {

		const user = await CsvService.delete(req.params.id)

		res.send(user);
	}

}

module.exports = CsvController