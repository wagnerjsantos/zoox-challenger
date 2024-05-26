const { EntityRepository, Repository } = require("typeorm");
const User = require("../entities/UserEntity")

@EntityRepository(User)
export class UserRepository extends Repository {

    async addUsers(data) {
        try {
            const user = this.create(data)
            return await this.save(user)
        } catch (error) {
            console.log(error)
            return false
        }
    }

}