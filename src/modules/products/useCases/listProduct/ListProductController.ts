import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductUseCase } from "./ListProductUseCase";

export class ListProductController {
 
    async handle(request: Request, response: Response): Promise<Response>{
        const listProductUseCase = container.resolve(ListProductUseCase)
    
        const all = await listProductUseCase.execute()

        return response.status(201).json(all)
    }
}