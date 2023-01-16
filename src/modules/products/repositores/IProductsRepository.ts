import { Product } from "@prisma/client";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";

export interface IProductsRepository {
    create(data: ICreateProductDTO): Promise<void>
    list(): Promise<Product[]>
    findByName(name: string): Promise<Product>
}