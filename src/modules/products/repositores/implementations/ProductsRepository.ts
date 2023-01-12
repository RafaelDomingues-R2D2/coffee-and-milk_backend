import { prisma } from "../../../../shared/infra/database/prismaClient";

import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepository implements IProductsRepository {

    async create({ id, name, description, price, img }: ICreateProductDTO): Promise<void> {
        await prisma.product.create({
            data: {
                id,
                name,
                description,
                price,
                img
            }
        })
    }
}