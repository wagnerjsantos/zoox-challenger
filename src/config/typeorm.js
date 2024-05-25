const TypeOrm = require("typeorm")
const UserEntity = require("../modules/csv/entities/UserEntity")
const ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "senha_root_123",
    database: "zoox",
    synchronize: true,
    entities: [
        UserEntity
    ]
}

module.exports = ConnectionOptions