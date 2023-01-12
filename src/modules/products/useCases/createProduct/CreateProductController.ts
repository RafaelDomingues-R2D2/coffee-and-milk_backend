import { Request, Response } from "express"
import { container } from "tsyringe"

import { CreateProductUseCase } from "./CreateProductUseCase"

export class CreateProductController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, description, price } = request.body

        const createProductUseCase = container.resolve(CreateProductUseCase)

        await createProductUseCase.execute({
            name,
            description,
            price
        })

        return response.status(201).send()
    }
}