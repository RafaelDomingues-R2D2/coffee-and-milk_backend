import { ICreateOrderDTO } from "../dtos/ICreateOrderDTO";

export interface IOrderRepository {
    create(data: ICreateOrderDTO): Promise<void>
}