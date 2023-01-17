import { inject, injectable } from "tsyringe";
import { ICreateOrderDTO } from "../../dtos/ICreateOrderDTO";
import { IOrderRepository } from "../../repositores/IOrdersRepository";

@injectable()
export class CreateOrderUseCase {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrderRepository
    ){}

    async execute({ status, draft, total }: ICreateOrderDTO): Promise<void>{
        await this.ordersRepository.create({
            status,
            draft,
            total
        })
    }
}