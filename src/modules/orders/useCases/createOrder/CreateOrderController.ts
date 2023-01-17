import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateOrderUseCase } from "./CreateOrderUseCase"

export class CreateOrderController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { status, draft, total } = request.body

        const createOrderUseCase = container.resolve(CreateOrderUseCase)

        await createOrderUseCase.execute({
            status,
            draft,
            total
        })

        return response.status(201).send()
    }
}