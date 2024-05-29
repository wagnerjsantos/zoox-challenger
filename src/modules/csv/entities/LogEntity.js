const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Log",
    tableName: "logs",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        reference: {
            type: "int",
        },
        description: {
            type: "varchar",
        }
    },
})