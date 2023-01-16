import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ProductsRepository } from "../../repositores/implementations/ProductsRepository";

@injectable()
export class ListProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: ProductsRepository
    ){}

    async execute(): Promise<Product[]>{
        const products = await this.productsRepository.list()

        return products
    }
}