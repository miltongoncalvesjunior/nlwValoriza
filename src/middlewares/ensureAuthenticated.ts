import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}
export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Receber o token
    const authToken = request.headers.authorization;
  
    // Validar se token esta preenchido
    if (!authToken) {
        return response.status(401).end();
    }
    const [, token] = authToken.split(" ");

    try {
        // Validar se o authToken e valido
      const { sub } = verify(token,"a92b082db7f47d8efb872b8d047d8856")as IPayload;
      //recuperar informacoes do usuarios
      request.user_id = sub;
      return next();
    } catch (error) {
      return response.status(401).end();
    }

          
}
