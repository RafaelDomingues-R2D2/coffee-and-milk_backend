import { prisma } from "../../../../shared/infra/database/prismaClient";
import { ICreateOrderDTO } from "../../dtos/ICreateOrderDTO";
import { IOrderRepository } from "../IOrdersRepository";

export class OrderRepository implements IOrderRepository {

    async create({ status, draft, total }: ICreateOrderDTO): Promise<void> {
        await prisma.order.create({
            data: {
                status,
                draft,
                total
            }
        })
    }
}