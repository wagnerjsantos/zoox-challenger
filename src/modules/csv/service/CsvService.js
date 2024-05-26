const UserRepository = require("../repositories/CsvRepository")

class CsvService {

    private static userRepository

    static async uploadCsv(data){
        console.log("upload, service", data)
    }

}

module.exports = CsvService