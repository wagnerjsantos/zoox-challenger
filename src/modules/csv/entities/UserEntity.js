const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        birthday: {
            type: "varchar",
        },
        gender: {
            type: "varchar",
        },
        nationality: {
            type: "varchar",
        },
        created: {
            type: "varchar",
        },
        updated: {
            type: "varchar",
        },
    },
})