import { inject, injectable } from "tsyringe"

import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IProductsRepository } from "../../repositores/IProductsRepository";

@injectable()
export class CreateProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ){}

    async execute({ name, description, price }: ICreateProductDTO): Promise<void>{
        await this.productsRepository.create({
            name,
            description,
            price
        })
    }
}