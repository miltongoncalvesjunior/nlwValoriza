import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

// repositorios de usuarios

@EntityRepository(User)
class UsersRepositories extends Repository<User>{
    
}
export { UsersRepositories }