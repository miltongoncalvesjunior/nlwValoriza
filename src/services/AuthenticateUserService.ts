import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}
class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        //vverificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect")

        }
        //verificar se a senha esta correta
        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");


        }

        // Gerar token
        const token = sign(
            {
                email: user.email,
            },
            "a92b082db7f47d8efb872b8d047d8856",
            {
                subject: user.id,
                expiresIn: "1d"

            }
        );
        return token;

    }
}

export { AuthenticateUserService }