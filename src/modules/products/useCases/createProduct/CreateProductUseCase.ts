import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../errors/AppError";

import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IProductsRepository } from "../../repositores/IProductsRepository";

@injectable()
export class CreateProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ){}

    async execute({ name, description, price }: ICreateProductDTO): Promise<void>{
        
        const productsAlreadyExists = await this.productsRepository.findByName(name)

        if(productsAlreadyExists)
            throw new AppError("Product already exists")

        await this.productsRepository.create({
            name,
            description,
            price
        })
    }
}