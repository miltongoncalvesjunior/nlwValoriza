import { Request,  Response } from "express"
import { CreateUserService } from "../services/CreateUserService";

// camada onde vai receber os dados da requisicao e repassa pro service isolando  

class CreateUserController {

    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, admin, password});
        return response.json(user);
    }
}
export { CreateUserController };