const UserEntity = require("../entities/UserEntity")
const { getRepository } = require("typeorm");

class CsvService {

    static async uploadCsv(data){
        const userRepository = getRepository(UserEntity);

        try {

            for (let row of data) {

                const user = userRepository.create({
                    name: row.nome,
                    birthday: row.data_nascimento,
                    gender: row.genero,
                    nationality: row.nacionalidade,
                    created: row.data_criacao,
                    updated: row.data_atualizacao
                });

                await userRepository.save(user);
            }
            return userRepository.find();
        } catch (error) {
            console.error(error);
        }
    }

    static async getOne(id){

        const userRepository = getRepository(UserEntity);

        try {
            const userFind = userRepository.find({
                where: {
                    id: id
                },
            });

            if (userFind){
                return userFind
            }

            return false
        } catch (error) {
            console.error(error);
        }
    }

    static async getAll(){

        const userRepository = getRepository(UserEntity);

        try {
            return userRepository.find();
        } catch (error) {
            console.error(error);
        }
    }

    static async update(id, data){

        const userRepository = getRepository(UserEntity);

        try {

            const userFind = userRepository.find({
                where: {
                    id: id
                },
            });

            if (userFind){

                userRepository.update({id},{
                    name: data.name,
                    birthday: data.birthday,
                    gender: data.gender,
                    nationality: data.nationality,
                    updated: data.updated
                });

                return userRepository.find({
                    where: {
                        id: id
                    },
                });
            }

            return false

        } catch (error) {
            console.error(error);
        }
    }

    static async delete(id){

        const userRepository = getRepository(UserEntity);

        try {

            return await userRepository.delete({
                id: id
            });

        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = CsvService