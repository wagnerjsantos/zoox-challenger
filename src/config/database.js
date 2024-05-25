const TypeOrm = require("typeorm")

const ConnectDatabase = async (ConnectionOptions) => {
    try {
        await TypeOrm.createConnection(ConnectionOptions)
        console.log("DB conectado")
    } catch (error) {
        console.error("DB não conectado", error)
    }
}

module.exports = ConnectDatabase