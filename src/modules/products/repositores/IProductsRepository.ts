import { ICreateProductDTO } from "../dtos/ICreateProductDTO";

export interface IProductsRepository {
    create(data: ICreateProductDTO): Promise<void>
}