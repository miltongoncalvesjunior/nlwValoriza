import { Request,  Response } from "express"
import { CreateTagService } from "../services/CreateTagService";

  

class CreateTagController {
    static handle(arg0: string, handle: any) {
        throw new Error("Method not implemented.");
    }

    async handle(request: Request, response: Response) {
        const { name} = request.body;

        const createTagService = new CreateTagService();

        const tag = await createTagService.execute(name);

        return response.json(tag);
    }
}
export { CreateTagController };