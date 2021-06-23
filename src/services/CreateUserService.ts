import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

// camada responsavel por contem toda regra de negocio e validacoes 

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        
        
        //regras de negocio  tratando dados  email, usuario com mesmo email e cadastro sem email

        if (!email) {
            throw new Error("Email incorrect");
        }
        const userAlreadyExists = await usersRepository.findOne({
            email,
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");

        }


        const user = usersRepository.create({
            name,
            email,
            admin,
        });


        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };
