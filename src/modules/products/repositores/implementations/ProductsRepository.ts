import { Product } from "@prisma/client";
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

    async list(): Promise<Product[]> {
        const products = await prisma.product.findMany()

        return products
    }

    async findByName(name: string): Promise<Product> {
        const product = await prisma.product.findFirst({
            where: {
                name
            }
        })

        return product
    }
}