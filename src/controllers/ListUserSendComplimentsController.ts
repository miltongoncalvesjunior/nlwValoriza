import { Request, Response } from "express";
import { Compliment } from "../entities/Compliment";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
    async handle(request:Request, response: Response) {
        const { user_id } = request; 
        
        const listUserSendComplimentsService = new ListUserSendComplimentsService();
        
        const Compliments = await listUserSendComplimentsService.execute(user_id);
        return response.json(Compliments);
    }
 
}
    export { ListUserSendComplimentsController}