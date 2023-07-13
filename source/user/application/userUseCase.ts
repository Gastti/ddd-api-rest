import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
    constructor(private readonly userRepository:UserRepository){

    }

    public async registerUser({name, email, description}: any){
        const userValues = new UserValue({name, email, description});
        const userCreated = await this.userRepository.registerUser(userValues);
        return userCreated;
    }

    public async getDetailUser(uuid: string) {
        const user = await this.userRepository.findUserById(uuid);
        return user;
    }
}